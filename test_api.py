# C:\projets\egg_def\test_api.py
import requests

print("🔍 Test des APIs Django...")

# Test de l'API events
try:
    response = requests.get('http://localhost:8000/api/events/')
    print(f"\n📅 API Events:")
    print(f"   Status: {response.status_code}")
    print(f"   Content: {response.text[:200]}")
    
    if response.status_code == 200:
        try:
            data = response.json()
            print(f"   JSON: {len(data)} élément(s)")
            if len(data) > 0:
                print(f"   Premier événement: {data[0]}")
        except:
            print("   ❌ Réponse vide ou non-JSON")
    else:
        print(f"   ❌ Erreur HTTP")
        
except Exception as e:
    print(f"   ❌ Erreur connexion: {e}")

# Test de l'API pages
try:
    response = requests.get('http://localhost:8000/cms/api/pages/')
    print(f"\n📄 API Pages:")
    print(f"   Status: {response.status_code}")
    print(f"   Content: {response.text[:200]}")
    
    if response.status_code == 200:
        try:
            data = response.json()
            print(f"   JSON: {len(data)} élément(s)")
        except:
            print("   ❌ Réponse vide ou non-JSON")
    else:
        print(f"   ❌ Erreur HTTP")
        
except Exception as e:
    print(f"   ❌ Erreur connexion: {e}")