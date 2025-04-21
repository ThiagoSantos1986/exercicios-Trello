import base64
import io
from PIL import Image

# with open("foto.txt", "r") as file:
#     encoded_image = file.read()

# with open("imagem_decodificada.jpeg", "wb") as arquivo:
#     arquivo.write(encoded_image)
# def foto_carregada():
    
#     binari_data = base64.b64decode(encoded_image)

#     try:
#             # Cria um objeto BytesIO a partir dos bytes da imagem
#             img_bytes = io.BytesIO(binari_data)
            
            
            
#             # Abre a imagem a partir do objeto BytesIO
#             with Image.open(img_bytes) as img:
#                 img.show()  # Mostra a imagem (pode variar dependendo do ambiente de execução)

#     except Exception as e:
#             print(f"Erro ao criar a imagem: {e}")
            
# foto_carregada()
            
# img = Image.open(io.BytesIO(base64.decodebytes(bytes(encoded_image, "utf-8"))))
# img.save('my-image.jpeg')



# import requests
#   import base64

#   response = requests.get("https://api.example.com/data")

#   encoded_data = response.json()["data"]
# decoded_data = base64.b64decode(encoded_image).decode("utf-8")

# print(decoded_data)
# import requests
# import json

# url = "https://evolution-api-production-8af5.up.railway.app/chat/getBase64FromMediaMessage/ChatMike"

# payload = json.dumps({
#   "message": {
#     "key": {
#       "id": "75019F8AC1E34A73272A71AEF3F24829"
#     }
#   },
#   "convertToMp4": False
# })
# headers = {
#     'Content-Type': 'application/json',
#     'apikey': '5FD23FC88C5EFC2A87D25EF239BB9'
# }

# response = requests.request("POST", url, headers=headers, data=payload)

# print(response.json())

# foto = response.json()['base64']

# img = Image.open(io.BytesIO(base64.decodebytes(bytes(foto, "utf-8"))))
# img.save('my-image.jpeg')

