import asyncio
import openai

from scipy import spatial
from typing import List
import numpy as np
from data.investmentIdea_data import investment_ideas


#client = OpenAI()

def embed_text(text):
    response = openai.embeddings.create(
        model="text-embedding-3-large",
        input=text
    )
    return response.data[0].embedding

def distances_from_embeddings(
    query_embedding: List[float],
    embeddings: List[List[float]],
    distance_metric="cosine",
) -> List[List]:
    """Return the distances between a query embedding and a list of embeddings."""
    distance_metrics = {
        "cosine": spatial.distance.cosine,
        "L1": spatial.distance.cityblock,
        "L2": spatial.distance.euclidean,
        "Linf": spatial.distance.chebyshev,
    }
    distances = [
        distance_metrics[distance_metric](query_embedding, embedding)
        for embedding in embeddings
    ]
    return distances

def indices_of_nearest_neighbors_from_distances(distances) -> np.ndarray:
    """Return a list of indices of nearest neighbors from a list of distances."""
    return np.argsort(distances)

def search_recommended_ideas(user_query: str, investments) -> List[str]:
    embeddings = []
    for idea in investments:
        idea_str = idea.to_string()
        #print(f"esta es la idea:{idea_str}")
        #description = idea.description
        emb = embed_text(idea_str)
        embeddings.append(emb)
    
    #user_query = "I'm interested in Venture Capital in technology in USD with a focus on artificial intelligence companies."
    user_embedding = embed_text(user_query)

    # Now embeddings is a list of all idea embeddings
    distances = distances_from_embeddings(user_embedding, embeddings, distance_metric="cosine")

    indices_of_nearest_neighbors = indices_of_nearest_neighbors_from_distances(distances)
    k_counter = 0
    for i in indices_of_nearest_neighbors:
        if k_counter >= 10:
            break
        k_counter += 1
        print(
            f"""
        --- Recommendation #{k_counter} (nearest neighbor {k_counter} of {10}) ---
        String: {investment_ideas[i]}
        Distance: {distances[i]:0.3f}"""
        )

    
    return [investment_ideas[i] for i in indices_of_nearest_neighbors[:3]]

