const sampleListings = [
    {
        Brand: "Bewakoof",
        Brief:
          "Plain or Printed? We have it all. Shop your favourite from a variety of trendy T-shirts. One-stop Shopping Destination",
         image: "https://thoughtoverdesign.com/wp-content/uploads/2022/05/Bewakoof-LogoVariants.png",
      video:"https://www.youtube.com/watch?v=RGh7aBsYkhE&pp=ygULQmV3YWtvb2YgYWQ%3D",
        target: "Global",
        instagram: "https://www.instagram.com/bewakoofofficial/",
      },
  {
        Brand: "Powerlook",
        Brief:
          "Shop the Latest of Men's Casual Fashion! Stores-Borivali | Andheri | Thane | Bandra | Vasai Shop The #GOAT is here!",
         image: "https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/425683757_687215313587481_3150994944208229143_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PaquaO28HosAX94TXvA&_nc_ht=scontent.fmaa14-1.fna&oh=00_AfDVuO3ZHnNz53cuZsyVT9sekjd3xfIHOUlfX1dNYSOxLA&oe=65F11129",
      video:"https://www.youtube.com/watch?v=SRIaAdWyY24&pp=ygUMUG93ZXJsb29rIGFk",
        target: "Mumbai",
        instagram: "https://www.instagram.com/powerlookofficial/?hl=en",
      },
  {
        Brand: "Thrive",
        Brief:
          "Khane ke liye ‘kuchh bhi’ nahi chalega",
         image: "https://play-lh.googleusercontent.com/KiePPRXQEjkt7XRbwM_T0tPD5bf3s6FlB6cVp-QYiK33lWSKgxGMpP1TXFIpywCrDVuy=w480-h960-rw",
      video:"https://www.youtube.com/shorts/1WWvGhUDCa8?feature=share",
        target: "Mumbai",
        instagram: "https://www.instagram.com/thrivenow.in/",
      },
  {
        Brand: "Eatsure",
        Brief:
          "Order food online and get delicious meals delivered to your doorstep from EatSure India's most recommended food delivery service.",
         image: "https://product-assets.faasos.io/eatsure/production/es-brandcolor-logo.svg",
      video:"https://www.youtube.com/watch?v=xMOG-lzh_Zo&pp=ygULZWF0IHN1cmUgYWQ%3D",
        target: "Global",
        instagram: "https://www.instagram.com/eatsurenow/",
      },
  {
        Brand: "SmallCase",
        Brief:
          "Invest in ideas with smallcases · A smallcase is a basket of stocks that reflects an idea · Curated by India's top investment managers",
         image: "https://entrackr.com/storage/2022/02/Smallcase.jpg",
      video:"https://www.youtube.com/watch?v=K20qcYDP-pc&pp=ygUNc21hbGwgY2FzZSBhZA%3D%3D",
        target: "Global",
        instagram: "https://www.instagram.com/smallcasehq/",
      },
      {
  Brand: "Fello.in",
        Brief:
          "Fello is a gamified investment and personal finance platform which incentivizes users for saving, growing their money and receive returns higher than their traditional savings account. Users earn the right to participate in the games and lotteries every time they save and invest on the platform which makes the experience of saving fun and intuitive.",
         image: "https://www.f6s.com/content-resource/profiles/3309896_th1.jpg",
      video:"https://www.youtube.com/watch?v=69etuM4-8T4&pp=ygUIRmVsbG8gYWQ%3D",
        target: "Banglore",
        instagram: "https://www.instagram.com/fellofinance/",
      },
      {
  Brand: "Polygon",
        Brief:
          "Polygon Miden. A decentralized rollup that leverages private data storage and local transaction execution. Because privacy scales better.",
         image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Polygon_blockchain_logo.png",
      video:"https://www.youtube.com/watch?v=GWUwFDFOipo&pp=ygUVUG9seWdvbiBibG9ja2NoYWluIGFk",
        target: "Global",
        instagram: "https://www.instagram.com/polygoncrypto/",
      },
      {
  Brand: "Solana",
        Brief:
          "Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.",
         image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
      video:"https://youtu.be/CEuKahqOYbs",
        target: "Global",
        instagram: "https://www.instagram.com/solana_update/",
      },
      {
  Brand: "Taj Hotels",
        Brief:
          "Our best fine-dining restaurants in Mumbai at Taj , will make you travel the world.",
         image: "https://images.jdmagicbox.com/comp/salem/x1/0427px427.x427.200829022540.u9x1/catalogue/ss-biryani-center-sarkar-kollapatty-salem-restaurants-oka3akogth.jpg",
      video:"https://www.youtube.com/watch?v=eYxRZ2TiJxY&pp=ygUKVGFqIGhvdGVscw%3D%3D",
        target: "Mumbai",
        instagram: "https://www.instagram.com/tajhotels/",
      },
      {
  Brand: "MTR",
        Brief:
          "Mavalli Tiffin Rooms, known more popularly as MTR, was established in 1924 and is one of Bangalore's oldest and most well known restaurants.",
         image: "https://images.squarespace-cdn.com/content/v1/53347a62e4b020b97b38554c/1472581360469-UF079E177TL1VRQ1UQBZ/image-asset.png?format=2500w",
      video:"https://www.youtube.com/watch?v=lUGITBccwoY&pp=ygUHTVRSIGFkZA%3D%3D",
        target: "Banglore",
        instagram: "https://www.instagram.com/mtr_foods/",
      },
      {
  Brand: "FNP",
        Brief:
          "FNP India's largest online gift shop for Flowers, Cakes, Plants, Personalised Gifts & more. We promise ✓ midnight & ✓ same-day delivery in India. ",
         image: "https://exchange4media.gumlet.io/news-photo/120216-main5.jpg?format=webp&w=768&dpr=1.5",
      video:"https://www.youtube.com/watch?v=lUGITBccwoY&pp=ygUHTVRSIGFkZA%3D%3D",
        target: "Global",
        instagram: "https://www.instagram.com/fernsnpetalsindia/",
      },
      {
  Brand: "The Zappy Box",
        Brief:
          "Discover a wide range of gift boxes at best price. Customise them for any occasion. Quirky combinations. Corporate orders.",
         image: "https://lokalstreet.in/wp-content/uploads/2022/01/zapp.png",
      video:"https://www.youtube.com/shorts/6d8Y1aVKFgc",
        target: "Global",
        instagram: "https://www.instagram.com/thezappybox/",
      },
];
module.exports = { data: sampleListings };