import sys
from stable_diffusion_model import StableDiffusion  

if __name__ == "__main__":
    prompt = sys.argv[1]
    model = StableDiffusion()
    
    image = model.generate_image(prompt)
    
    image.save("output_image.png")  
    print("output_image.png") 