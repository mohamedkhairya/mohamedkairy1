import { Category, Daum, Iprodcet,Daums } from "@/interface/interface.pordact"
import { myAddcartToken } from "@/utilities"
import axios from "axios"
import { jwtDecode } from "jwt-decode"

 
 
 
 
 export async function getAllPosts(): Promise<Iprodcet | undefined> {
      try{
        let response = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
        
        response = await response.data 
        return response.data

      }catch(erorr){}

      }
 export async function getSinglePost(id: string): Promise<Daum | undefined> {
      try{
        let response = await axios.get("https://ecommerce.routemisr.com/api/v1/products/"+id)
        response = await response.data 
        return response.data

      }catch(erorr){}

      }

export async function getCategories(): Promise<Category[] | undefined> {
  try {
    const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
   
    return data.data; 
  } catch (error) {

    
  }
}
export async function getBrands(): Promise<Daums[] | undefined> {
  try {
    const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/brands');

    return data.data; 
  } catch (error) {

    
  }
}

// getElectronicsProducts

export async function getElectronicsProducts(): Promise<Daum[]> {
  try {
    const categoriesRes = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
    const electronicsCategory = categoriesRes.data.data.find(
      (cat: any) => cat.name === "Electronics"
    );

    if (!electronicsCategory) {
      return [];
    }

    const categoryId = electronicsCategory._id;
    console.log("Correct Electronics ID is:", categoryId);

    const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`);
    
    return data.data || [];
  } catch (error) {
    console.error("Error fetching electronics:", error);
    return [];
  }
}


// الحريمي

export async function getWomensProducts(): Promise<Daum[]> {
  try {
    const categoriesRes = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
    
    const womensCategory = categoriesRes.data.data.find(
      (cat: any) => cat.name === "Women's Fashion"
    );

    if (!womensCategory) {
      return [];
    }

    const categoryId = womensCategory._id;

    const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`);
    
    return data.data || [];
  } catch (error) {
   return [];
  }
}


export async function getMensProducts(): Promise<Daum[]> {
  try {
    const categoriesRes = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
    
    const mensCategory = categoriesRes.data.data.find(
      (cat: any) => cat.name === "Men's Fashion"
    );

    if (!mensCategory) {
      return [];
    }

    const categoryId = mensCategory._id;

    const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`);
    
    return data.data || [];
  } catch (error) {
  return [];
  }
}

// RegisterForm


export async function getUserOrders() {
  
    const token = await myAddcartToken();

    if (!token) return { status: "fail", message: "Token not found" };

    try {
        const decoded: any = jwtDecode(token);
        const userId = decoded.id;

        const req = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`, {
            method: "GET",
        });

        const data = await req.json();
        
        return data || { status: "fail", message: "No data found" }; 
        
    } catch (error) {
        return { status: "error", message: "Failed to fetch orders" };
    }
}