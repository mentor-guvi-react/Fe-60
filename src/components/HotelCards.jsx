import {
  AppBar,
  Grid,
  TextField,
  Autocomplete,
  FormControl,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Card,
} from "@mui/material";

import { BookingModal } from "./BookingModal";

import { useState } from "react";

export function HotelCards({ location }) {
  const [hotelId, setHotelId] = useState("");

  return (
    <>
      <Grid container gap={1}>
        {restaurant[location?.toLowerCase()].map((eachHotel) => {
          return (
            <Grid
              item
              key={eachHotel.id}
              style={{ cursor: "pointer" }}
              onClick={(e) => setHotelId(eachHotel.id)}
            >
              <Card sx={{ maxWidth: 345 }}>
                <div style={{ position: "relative" }}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={eachHotel.image}
                    title="green iguana"
                  />

                  <div
                    style={{
                      height: 30,
                      width: 40,
                      backgroundColor: "rgba(192, 226, 21, 0.93)",
                      color: "white",
                      fontWeight: 600,
                      textAlign: "center",
                      borderRadius: 4,
                      position: "absolute",
                      top: 4,
                      right: 4,
                    }}
                  >
                    {eachHotel.ratings}
                  </div>
                </div>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {eachHotel.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {eachHotel.address}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {eachHotel.priceDetail} |
                    {eachHotel.tags.map((e) => ` ${e} , `)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {hotelId && (
        <BookingModal
          open={hotelId}
          setOpen={() => setHotelId("")}
          hotelId={hotelId}
        />
      )}
    </>
  );
}

const restaurant = {
  delhi: [
    {
      id: "97967512-0f0c-448b-a330-9f242f729bc1",
      name: "Delia My Bar Headquarters",
      location: "Karol Bagh, Central Delhi",
      price: "3000",
      priceDetail: "₹ 3,000 for 2 approx",
      tags: ["American", "Bengali", "5 Star", "Buffet", "Bakery"],
      ratings: "8.5",
      image:
        "https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 30,
    },
    {
      id: "48a44e46-eaaa-4a7d-989f-45b24eb7f3d4",
      name: "Saffron Grill",
      location: "Punjabi Bagh, West Delhi",
      price: "2800",
      priceDetail: "₹ 2,800 for 2 approx",
      tags: ["Indian", "Chinese", "4 Star", "A La Carte"],
      ratings: "7.8",
      image:
        "https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 10,
    },
    {
      id: "13087731-7e00-42c4-839e-69b5991c8548",
      name: "The Darbar",
      location: "Connaught Place, Central Delhi",
      price: "2000",
      priceDetail: "₹ 2,000 for 2 approx",
      tags: ["Indian", "Mughlai", "3 Star", "Buffet"],
      ratings: "6.9",
      image:
        "https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 15,
    },
    {
      id: "83944d8b-4ff4-41e1-8b08-abae68ee4257",
      name: "Rooftop Bistro",
      location: "Lajpat Nagar, South Delhi",
      price: "3500",
      priceDetail: "₹ 3,500 for 2 approx",
      tags: ["Italian", "Continental", "5 Star", "A La Carte"],
      ratings: "8.2",
      image:
        "https://img.freepik.com/premium-photo/chicken-shish-kebab-with-zucchini_2829-8370.jpg?size=626&ext=jpg",
      discount: 20,
    },
    {
      id: "057b69a1-fe71-4dbb-b575-0818b589c878",
      name: "Green Leaf",
      location: "Hauz Khas, South Delhi",
      price: "1500",
      priceDetail: "₹ 1,500 for 2 approx",
      tags: ["Vegetarian", "South Indian", "3 Star", "Buffet"],
      ratings: "7.1",
      image:
        "https://img.freepik.com/free-photo/traditional-american-pancakes-plate-table-top-view_140725-49397.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 10,
    },
    {
      id: "bde02973-aa72-4430-b0a7-a07b5401cba8",
      name: "Bollywood Nights",
      location: "Rajouri Garden, West Delhi",
      price: "4500",
      priceDetail: "₹ 4,500 for 2 approx",
      tags: ["Indian", "Mughlai", "5 Star", "Buffet"],
      ratings: "9.5",
      image:
        "https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 25,
    },
    {
      id: "3e32c314-9f2d-4bc0-a834-ccc4b6d7788a",
      name: "Street Spice",
      location: "Chandni Chowk, Old Delhi",
      price: "1200",
      priceDetail: "₹ 1,200 for 2 approx",
      tags: ["Indian", "Street Food", "3 Star", "Buffet"],
      ratings: "7.4",
      image:
        "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 10,
    },
    {
      id: "7365a497-c6f7-4c28-982c-b907f04d2162",
      name: "Fusion Bites",
      location: "Saket, South Delhi",
      price: "3200",
      priceDetail: "₹ 3,200 for 2 approx",
      tags: ["Asian", "Fusion", "4 Star", "A La Carte"],
      ratings: "8.0",
      image:
        "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 15,
    },
    {
      id: "26b8c59f-8f49-4088-ba86-ed1bdef8311e",
      name: "Café Delight",
      location: "Vasant Kunj, South Delhi",
      price: "1800",
      priceDetail: "₹ 1,800 for 2 approx",
      tags: ["Café", "Continental", "3 Star", "Buffet"],
      ratings: "7.6",
      image:
        "https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 10,
    },
    {
      id: "f4b3819b-28bd-4d70-8505-7b5cbf77b3e4",
      name: "Golden Spice",
      location: "Janakpuri, West Delhi",
      price: "2600",
      priceDetail: "₹ 2,600 for 2 approx",
      tags: ["Indian", "Chinese", "4 Star", "Buffet"],
      ratings: "8.1",
      image:
        "https://img.freepik.com/free-photo/top-view-tasty-vegetable-salad-inside-plate-dark-blue-background-cuisine-restaurant-fresh-meal-color-health-lunch-food-diet_179666-18290.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 20,
    },
    {
      id: "752f5cbb-c5de-4143-b385-68d07b80a059",
      name: "The Nook",
      location: "Greater Kailash, South Delhi",
      price: "3800",
      priceDetail: "₹ 3,800 for 2 approx",
      tags: ["Italian", "Mediterranean", "5 Star", "A La Carte"],
      ratings: "9.2",
      image:
        "https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 25,
    },
    {
      id: "d45a52a5-6468-461b-a667-415b23e25723",
      name: "Skyline Lounge",
      location: "Nehru Place, South Delhi",
      price: "2800",
      priceDetail: "₹ 2,800 for 2 approx",
      tags: ["Cocktail Bar", "Lounge", "4 Star", "Buffet"],
      ratings: "7.9",
      image:
        "https://img.freepik.com/premium-photo/manchurian-hakka-schezwan-noodles-popular-indochinese-food-served-bowl_466689-46402.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 10,
    },
    {
      id: "0d129aa4-31ad-4345-a226-1551e63c5658",
      name: "Pizzeria Italia",
      location: "Green Park, South Delhi",
      price: "2000",
      priceDetail: "₹ 2,000 for 2 approx",
      tags: ["Italian", "Pizza", "3 Star", "A La Carte"],
      ratings: "7.3",
      image:
        "https://img.freepik.com/premium-photo/photo-curry_931878-36478.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 15,
    },
    {
      id: "db894734-995d-44ef-a82c-5946bfa68c83",
      name: "Ocean Pearl",
      location: "Chanakyapuri, South Delhi",
      price: "3500",
      priceDetail: "₹ 3,500 for 2 approx",
      tags: ["Seafood", "Continental", "5 Star", "Buffet"],
      ratings: "8.4",
      image:
        "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 20,
    },
    {
      id: "aeff589c-7682-4324-91d7-b69ed72af586",
      name: "Café Royal",
      location: "Okhla, South Delhi",
      price: "1800",
      priceDetail: "₹ 1,800 for 2 approx",
      tags: ["Café", "Continental", "4 Star", "Buffet"],
      ratings: "7.7",
      image:
        "https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 10,
    },
  ],
  mumbai: [
    {
      id: "b791827f-fddc-4489-9592-c273db0978e2",
      name: "Marine Palace",
      location: "Marine Drive, South Mumbai",
      price: "4000",
      priceDetail: "₹ 4,000 for 2 approx",
      tags: ["Seafood", "Italian", "4 Star", "Buffet"],
      ratings: "9.0",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800",
      discount: 10,
    },
    {
      id: "d5bf8342-34ce-4871-b354-a738089b5af1",
      name: "Bayview Bistro",
      location: "Juhu Beach, West Mumbai",
      price: "3200",
      priceDetail: "₹ 3,200 for 2 approx",
      tags: ["Continental", "Mediterranean", "5 Star", "A La Carte"],
      ratings: "8.2",
      image:
        "https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 15,
    },
    {
      id: "98aa091b-1407-47f4-969e-586c96d1fbc4",
      name: "Golden Sands",
      location: "Powai, Central Mumbai",
      price: "2500",
      priceDetail: "₹ 2,500 for 2 approx",
      tags: ["Indian", "Chinese", "3 Star", "Buffet"],
      ratings: "7.5",
      image:
        "https://img.freepik.com/premium-photo/paneer-tikka-is-indian-dish-made-from-chunks-cottage-cheese-marinated-spices-grilled-tandoor_466689-76797.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 20,
    },
    {
      id: "cce42880-8711-4ef6-97da-2b0446fc2e7b",
      name: "Sunset Lounge",
      location: "Andheri, West Mumbai",
      price: "1800",
      priceDetail: "₹ 1,800 for 2 approx",
      tags: ["Cocktail Bar", "Lounge", "4 Star", "A La Carte"],
      ratings: "6.8",
      image:
        "https://img.freepik.com/free-photo/japanese-food-bowl-rice-boiled-white-fish-wakame-chuka-seaweed-salad_2829-17359.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 10,
    },
    {
      id: "5720102a-e3be-461a-b6dc-c40d5b588744",
      name: "Oceanic Spice",
      location: "Colaba, South Mumbai",
      price: "3500",
      priceDetail: "₹ 3,500 for 2 approx",
      tags: ["Seafood", "Indian", "5 Star", "Buffet"],
      ratings: "8.9",
      image:
        "https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35929.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 25,
    },
    {
      id: "07537e7c-aae2-4c50-9cda-ff75c75b194b",
      name: "City Lights",
      location: "Bandra, West Mumbai",
      price: "2800",
      priceDetail: "₹ 2,800 for 2 approx",
      tags: ["Italian", "Mediterranean", "4 Star", "A La Carte"],
      ratings: "7.7",
      image:
        "https://img.freepik.com/premium-photo/paneer-curry_57665-13664.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 10,
    },
    {
      id: "95c092eb-805e-4f6f-946f-be6efd35c8ac",
      name: "Urban Kitchen",
      location: "Worli, South Mumbai",
      price: "2200",
      priceDetail: "₹ 2,200 for 2 approx",
      tags: ["Vegetarian", "Asian", "3 Star", "Buffet"],
      ratings: "7.2",
      image:
        "https://img.freepik.com/premium-photo/biryani-is-mixed-rice-dish_891336-899.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 15,
    },
    {
      id: "2f1013f1-54bd-4191-9906-8c7aaab7434c",
      name: "Tandoori Nights",
      location: "Thane, North Mumbai",
      price: "1800",
      priceDetail: "₹ 1,800 for 2 approx",
      tags: ["Indian", "Tandoori", "4 Star", "Buffet"],
      ratings: "7.9",
      image:
        "https://img.freepik.com/free-photo/aloo-paratha-gobi-paratha-also-known-as-potato-cauliflower-stuffed-flatbread-dish-originating-from-indian-subcontinent_466689-76172.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 10,
    },
    {
      id: "09e08e30-8b00-424b-ab05-8e68c146d306",
      name: "Mumbai Masala",
      location: "Dadar, Central Mumbai",
      price: "2000",
      priceDetail: "₹ 2,000 for 2 approx",
      tags: ["Indian", "Mughlai", "3 Star", "A La Carte"],
      ratings: "6.5",
      image:
        "https://img.freepik.com/free-photo/vertical-shot-chickpea-curry-chana-masala-with-lime-bowl-white-surf_181624-31989.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 20,
    },
    {
      id: "efce7644-7da2-4a38-a43d-de41ce5cea93",
      name: "Harbor Delight",
      location: "Cuffe Parade, South Mumbai",
      price: "3000",
      priceDetail: "₹ 3,000 for 2 approx",
      tags: ["Seafood", "Continental", "5 Star", "Buffet"],
      ratings: "8.3",
      image:
        "https://img.freepik.com/premium-photo/indian-lunch-dinner-main-course-food-group-includes-paneer-butter-masala-dal-makhani-palak-paneer-roti-rice-etc-selective-focus_466689-6844.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 25,
    },
    {
      id: "f96c5910-c9f4-4f98-8170-784c0bcb84ae",
      name: "Brewery Bay",
      location: "Lower Parel, South Mumbai",
      price: "3500",
      priceDetail: "₹ 3,500 for 2 approx",
      tags: ["Brewery", "Pub", "4 Star", "A La Carte"],
      ratings: "8.0",
      image:
        "https://img.freepik.com/premium-photo/indian-vegetable-pulav-biryani-made-using-basmati-rice-served-terracotta-bowl-selective-focus_466689-55615.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 10,
    },
    {
      id: "d5a1f8b9-4f6d-4986-aaaa-f855f0edc4a7",
      name: "Golden Grill",
      location: "Goregaon, West Mumbai",
      price: "2600",
      priceDetail: "₹ 2,600 for 2 approx",
      tags: ["American", "Barbecue", "3 Star", "Buffet"],
      ratings: "7.6",
      image:
        "https://img.freepik.com/free-photo/fork-holding-boneless-chicken-piece-with-sauce_23-2149973031.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 15,
    },
    {
      id: "42fb0c52-a8c7-44b9-bb6e-945e5758f48a",
      name: "Spice Garden",
      location: "Malad, West Mumbai",
      price: "1800",
      priceDetail: "₹ 1,800 for 2 approx",
      tags: ["Indian", "Chinese", "4 Star", "Buffet"],
      ratings: "7.2",
      image:
        "https://img.freepik.com/free-photo/closeup-shot-deliciously-prepared-chicken-served-with-onions-chili-sauce_181624-61705.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 20,
    },
    {
      id: "3465dd81-b2dd-48b0-a8da-af5bdf02b367",
      name: "The Grill House",
      location: "Kandivali, North Mumbai",
      price: "2000",
      priceDetail: "₹ 2,000 for 2 approx",
      tags: ["American", "Steakhouse", "5 Star", "A La Carte"],
      ratings: "8.4",
      image:
        "https://img.freepik.com/free-photo/ready-eat-meal-collage-design_23-2150957802.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 25,
    },
    {
      id: "c6ca8ff0-36cf-46c2-8d4d-9bd427a57e52",
      name: "Paradise Cove",
      location: "Borivali, North Mumbai",
      price: "1500",
      priceDetail: "₹ 1,500 for 2 approx",
      tags: ["Seafood", "Indian", "3 Star", "Buffet"],
      ratings: "7.7",
      image:
        "https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182540.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 10,
    },
  ],
  chennai: [
    {
      id: "532f0aa7-0510-4d47-aefa-ef2f62ffed1c",
      name: "Soul Spice",
      location: "T Nagar, Central Chennai",
      price: "1800",
      priceDetail: "₹ 1,800 for 2 approx",
      tags: ["South Indian", "Continental", "3 Star", "A La Carte"],
      ratings: "6.7",
      image:
        "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=800",
      discount: 50,
    },
    {
      id: "174c019f-0f28-41aa-846f-ee328242a153",
      name: "Mango Tree",
      location: "Egmore, Central Chennai",
      price: "3500",
      priceDetail: "₹ 3,500 for 2 approx",
      tags: ["Indian", "Mughlai", "4 Star", "Buffet"],
      ratings: "8.3",
      image:
        "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=800",
      discount: 10,
    },
    {
      id: "47306943-db3b-4890-bf30-b5ce529454b0",
      name: "Coastal Delights",
      location: "Besant Nagar, South Chennai",
      price: "2500",
      priceDetail: "₹ 2,500 for 2 approx",
      tags: ["Seafood", "South Indian", "3 Star", "A La Carte"],
      ratings: "7.9",
      image:
        "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 20,
    },
    {
      id: "3e9e212c-b9ff-4915-80d1-7c481d7d3966",
      name: "Flavors of Chennai",
      location: "Anna Nagar, North Chennai",
      price: "2000",
      priceDetail: "₹ 2,000 for 2 approx",
      tags: ["Indian", "North Indian", "4 Star", "Buffet"],
      ratings: "7.5",
      image:
        "https://img.freepik.com/premium-photo/national-food-india-with-white-background-high-q_889056-6602.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 15,
    },
    {
      id: "a242cc59-2837-4b6d-a899-b503bbc05a81",
      name: "Royal Treat",
      location: "Mylapore, Central Chennai",
      price: "2800",
      priceDetail: "₹ 2,800 for 2 approx",
      tags: ["Indian", "Mughlai", "5 Star", "Buffet"],
      ratings: "8.6",
      image:
        "https://img.freepik.com/premium-photo/group-south-indian-food-like-masala-dosa-uttapam-idli-idly-wada-vada-sambar-appam-semolina-halwa-upma-served-banana-leaf-with-colourful-chutneys-selective-focus_466689-25677.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 25,
    },
    {
      id: "8840a719-29cc-422c-8e94-6a952bfe560f",
      name: "Café Rendezvous",
      location: "Adyar, South Chennai",
      price: "2200",
      priceDetail: "₹ 2,200 for 2 approx",
      tags: ["Café", "Continental", "3 Star", "A La Carte"],
      ratings: "7.2",
      image:
        "https://img.freepik.com/premium-photo/spices-seasonings-powder-splash-explosion-black-background_434420-1928.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 10,
    },
    {
      id: "550a0314-0b28-4839-8aac-365103f061f0",
      name: "Spice Junction",
      location: "Velachery, South Chennai",
      price: "1500",
      priceDetail: "₹ 1,500 for 2 approx",
      tags: ["Indian", "Chinese", "4 Star", "Buffet"],
      ratings: "6.8",
      image:
        "https://img.freepik.com/free-photo/hands-holding-shish-kebab-with-colorful-bell-peppers_141793-2931.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 20,
    },
    {
      id: "7ae8b49b-a24c-4f79-af86-52dc806abe2d",
      name: "Golden Sands",
      location: "Guindy, South Chennai",
      price: "2000",
      priceDetail: "₹ 2,000 for 2 approx",
      tags: ["Seafood", "Continental", "5 Star", "Buffet"],
      ratings: "8.0",
      image:
        "https://img.freepik.com/free-photo/top-view-japanese-meal-assortment_23-2148809872.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 15,
    },
    {
      id: "c4d4b2ad-274b-4662-aaf1-d0e79aff6e38",
      name: "Chettinad Palace",
      location: "Tambaram, South Chennai",
      price: "2800",
      priceDetail: "₹ 2,800 for 2 approx",
      tags: ["South Indian", "Chettinad", "4 Star", "A La Carte"],
      ratings: "7.5",
      image:
        "https://img.freepik.com/free-photo/delicious-asian-noodles-concept_23-2148773773.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 10,
    },
    {
      id: "7fe2e270-53b7-407f-af0c-ad250b2ade33",
      name: "Masala Mantra",
      location: "Pallavaram, South Chennai",
      price: "3200",
      priceDetail: "₹ 3,200 for 2 approx",
      tags: ["Indian", "North Indian", "3 Star", "Buffet"],
      ratings: "7.9",
      image:
        "https://img.freepik.com/free-photo/vertical-view-various-types-uncooked-pastas-mixed-color-background_140725-92103.jpg?size=626&ext=jpg&ga=GA1.1.51770993.1710842715&semt=sph",
      discount: 25,
    },
  ],
};

// const hotel1 = {
//   name: "abc",
//   rating: 9,
//   address: "test address",
//   id: "123-433-345",
// };

// const hotel2 = {
//   name: "ab2",
//   rating: 9,
//   address: "test address",
//   id: "123-433-345",
// };

// const chennai = [hotel1, hotel2];
// const mumbai = [hotel1, hotel2];

// const hotelMasterObj = {
//   chennai: [hotel1, hotel2],
//   mumbai: [hotel1, hotel2],
// };

// const mydrive = {
//   c: [{ mymusic: { 2014: [{ tamil: ["arr", "yuvan"] }] } }],
// };
