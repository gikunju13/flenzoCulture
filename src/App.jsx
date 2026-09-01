import React, { useEffect, useMemo, useState } from "react";
import heroImage from "./flenzo-assets/hero/hero-img.jpeg"
/* =========================================================
   FLENZO CONTENT DATA
   Replace image URLs here with the client's real photos.
   Product cards use only images[0]. The rest appear in the
   product modal gallery when a product has more than one image.
   ========================================================= */
const products = [
  {
    id: 3,
    name: "Flenzo Black Tee",
    category: "T-Shirts",
    price: 1200,
    oldPrice: 1500,
    rating: 4.8,
    colors: ["White", "Black"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      { src: "/flenzo/products/black-tee-front.jpeg", label: "Front" },
      { src: "/flenzo/products/black-tee-back.jpeg", label: "Back" }

      // { src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85", label: "Front" },
      // { src: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=85", label: "Back" },
    ],
    tag: "-20%",
  },
  {
    id: 4,
    name: "Flenzo Surf Tee",
    category: "T-Shirts",
    price: 1200,
    oldPrice: 1500,
    rating: 4.7,
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      { src: "/flenzo/products/surf-tee-front.jpeg", label: "Front" },
      { src: "/flenzo/products/surf-tee-back.jpeg", label: "Back" }


      // { src: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85", label: "Front" },
    ],
    tag: "-20%",
  },
  {
    id: 5,
    name: "Flenzo White Tee",
    category: "T-Shirts",
    price: 1200,
    oldPrice: 1500,
    rating: 4.8,
    colors: ["Black", "White"],
    sizes: ["28", "30", "32", "34"],
    images: [
      { src: "/flenzo/products/white-tee-front.jpeg", label: "Front" },
      { src: "/flenzo/products/white-tee-back.jpeg", label: "Back" }
      // { src: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=85", label: "Front" },
      // { src: "https://images.unsplash.com/photo-1624378440070-33e6d3f1dbe0?auto=format&fit=crop&w=900&q=85", label: "Detail" },
    ],
    tag: "-20%",
  },

  {
    id: 6,
    name: "Flenzo Car Tee",
    category: "T-Shirts",
    price: 1200,
    oldPrice: 1500,
    rating: 4.8,
    colors: ["Black", "White"],
    sizes: ["28", "30", "32", "34"],
    images: [
      { src: "/flenzo/products/flenzo-girl.jpeg" },
      // { src: "/flenzo/products/white-tee-back.jpeg", label: "Back" }
      // { src: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=85", label: "Front" },
      // { src: "https://images.unsplash.com/photo-1624378440070-33e6d3f1dbe0?auto=format&fit=crop&w=900&q=85", label: "Detail" },
    ],
    tag: "-20%",
  },


  {
    id: 7,
    name: "Flenzo Nairobi Tee",
    category: "T-Shirts",
    price: 1200,
    oldPrice: 1500,
    rating: 4.8,
    colors: ["Black", "White"],
    sizes: ["28", "30", "32", "34"],
    images: [
      { src: "/flenzo/products/flenzo-nairobi.jpeg" },
      // { src: "/flenzo/products/white-tee-back.jpeg", label: "Back" }
      // { src: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=85", label: "Front" },
      // { src: "https://images.unsplash.com/photo-1624378440070-33e6d3f1dbe0?auto=format&fit=crop&w=900&q=85", label: "Detail" },
    ],
    tag: "-20%",
  },

  {
    id: 8,
    name: "Flenzo Brown Tee",
    category: "T-Shirts",
    price: 1200,
    oldPrice: 1500,
    rating: 4.8,
    colors: ["Brown"],
    sizes: ["28", "30", "32", "34"],
    images: [
      { src: "/flenzo/products/flenzo-brown.jpeg" },
      // { src: "/flenzo/products/white-tee-back.jpeg", label: "Back" }
      // { src: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=85", label: "Front" },
      // { src: "https://images.unsplash.com/photo-1624378440070-33e6d3f1dbe0?auto=format&fit=crop&w=900&q=85", label: "Detail" },
    ],
    tag: "-20%",
  },


  {
    id: 9,
    name: "Flenzo Culture Tee",
    category: "T-Shirts",
    price: 1200,
    oldPrice: 1500,
    rating: 4.8,
    colors: ["White", "Black"],
    sizes: ["28", "30", "32", "34"],
    images: [
      { src: "/flenzo/products/flenzo-culture.jpeg" },
      // { src: "/flenzo/products/white-tee-back.jpeg", label: "Back" }
      // { src: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=85", label: "Front" },
      // { src: "https://images.unsplash.com/photo-1624378440070-33e6d3f1dbe0?auto=format&fit=crop&w=900&q=85", label: "Detail" },
    ],
    tag: "-20%",
  },





  // {
  //   id: 6,
  //   name: "Flenzo 6-Panel Cap",
  //   category: "Accessories",
  //   price: 1200,
  //   oldPrice: 1500,
  //   rating: 4.6,
  //   colors: ["Black", "Cream"],
  //   sizes: ["One Size"],
  //   images: [
  //     { src: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=85", label: "Front" },
  //   ],
  //   tag: "-20%",
  // },
  // {
  //   id: 7,
  //   name: "Flenzo Skate Deck",
  //   category: "Skate",
  //   price: 4200,
  //   oldPrice: 4800,
  //   rating: 4.9,
  //   colors: ["Natural", "Black"],
  //   sizes: ["8.0", "8.25", "8.5"],
  //   images: [
  //     { src: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=900&q=85", label: "Top" },
  //     { src: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=900&q=85", label: "Detail" },
  //   ],
  //   tag: "-13%",
  // },
  // {
  //   id: 8,
  //   name: "Flenzo Skate Tee",
  //   category: "Skate",
  //   price: 2000,
  //   oldPrice: 2400,
  //   rating: 4.9,
  //   colors: ["Black", "White"],
  //   sizes: ["S", "M", "L", "XL"],
  //   images: [
  //     { src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85", label: "Front" },
  //     { src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85", label: "Back" },
  //   ],
  //   tag: "-17%",
  // },
];

const categories = ["All", "T-Shirts"];

// Replace these placeholder images with the client's actual South Coast photos.
// const cultureStories = [
//   {
//     id: "culture-1",
//     label: "THE CULTURE",
//     title: "ROOTED ON THE SOUTH COAST",
//     text: "A visual story of the people, places and outfits that shape Flenzo. Replace this copy with the client's own explanation of what each look represents.",
//     image: "flenzo/culture/south-coast-roots.jpeg"
//     // image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85",
//   },
//   {
//     id: "culture-2",
//     label: "DIANI / KENYA",
//     title: "DRESSED IN PLACE",
//     text: "Clothing can carry a sense of place. Add the client's exact story here, including the meaning behind the outfit and the photograph.",
//     image: "flenzo/culture/dressed-in-place.jpeg"
//     // image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
//   },
//   {
//     id: "culture-3",
//     label: "MOVEMENT",
//     title: "MOVE WITH IT",
//     text: "Flenzo lives around movement, creativity and community. Replace this placeholder with the client's own words.",
//     image: "flenzo/culture/movement.jpeg"
//     // image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
//   },
// ];

// // Replace these images with the client's actual activity photographs.
// const communityStories = [
//   {
//     id: "skate-ocean",
//     label: "SKATE 4 THE OCEAN",
//     title: "MOVE TOGETHER.",
//     text: "A community story connecting skateboarding, people and movement with awareness and connection to the ocean. Add the client's exact story, dates and details here later.",
//     image: "/flenzo/community/skateForTheOcean.jpeg"
//     // image: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=1200&q=85",
//   },
//   {
//     id: "altinha",
//     label: "CUP OF ALTINHA",
//     title: "PLAY. PASS. CONNECT.",
//     text: "Altinha is a social beach activity built around keeping a ball in the air through controlled passes and movement. This space can tell the story of Flenzo's own Cup of Altinha activity without adding unverified event claims.",
//     image: "flenzo/community/cup-of-Altinha.jpeg"
//     // image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=85",
//   },
//   {
//     id: "beach-cleanups",
//     label: "COMMUNITY BEACH CLEANUPS",
//     title: "OUR COAST, OUR RESPONSIBILITY.",
//     text: "Plastic waste can collect along beaches. Community cleanups bring people together to remove plastic waste and care for the coastline. Add the client's own cleanup stories and verified numbers later.",
//     image: "flenzo/community/beach-cleanup.jpeg"
//     // image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1200&q=85",
//   },
//   {
//     id: "coastal-heritage",
//     label: "KENYA SOUTH COASTAL HERITAGE",
//     title: "OUR COAST, OUR RESPONSIBILITY.",
//     text: "Plastic waste can collect along beaches. Community cleanups bring people together to remove plastic waste and care for the coastline. Add the client's own cleanup stories and verified numbers later.",
//     image: "flenzo/community/beach-cleanup.jpeg"
//   },

// ];


const cultureStories = [
  {
    id: "culture-1",
    label: "THE CULTURE",
    title: "ROOTED ON THE SOUTH COAST",
    text: "Born around the energy of Kenya's South Coast, Flenzo Culture is about more than what you wear. It is the rhythm of the coast, the streets, the ocean and the people who give this place its character.",
    image: "/flenzo/culture/south-coast-roots.jpeg"
  },
  {
    id: "culture-2",
    label: "DIANI / KENYA",
    title: "DRESSED IN PLACE",
    text: "From beach days to city streets, Flenzo brings South Coast energy into everyday life. Easy pieces, bold character and a sense of place made for people who move their own way.",
    image: "/flenzo/culture/dressed-in-place.jpeg"
  },
  {
    id: "culture-3",
    label: "MOVEMENT",
    title: "MOVE WITH IT",
    text: "Flenzo belongs wherever people gather, move and create. Skate, play, explore, meet someone new and keep moving. The culture is not something you watch from the outside. You become part of it.",
    image: "/flenzo/culture/movement.jpeg"
  },
];

const communityStories = [
  {
    id: "skate-ocean",
    label: "SKATE 4 THE OCEAN",
    title: "MOVE TOGETHER.",
    text: "Skateboarding has always been about movement and expression. Skate 4 the Ocean brings that spirit to the coast, creating a space where people can ride, connect and celebrate the place around them.",
    image: "/flenzo/community/skateForTheOcean.jpeg"
  },
  {
    id: "altinha",
    label: "CUP OF ALTINHA",
    title: "PLAY. PASS. CONNECT.",
    text: "On the beach, a simple game can turn strangers into a circle of friends. Cup of Altinha is about rhythm, movement and connection, with the Indian Ocean as the backdrop.",
    image: "/flenzo/community/cup-of-Altinha.jpeg"
  },
  {
    id: "beach-cleanups",
    label: "COMMUNITY BEACH CLEANUPS",
    title: "OUR COAST. OUR HOME.",
    text: "The coast gives the community a place to meet, play and create. Giving something back starts with showing up, getting involved and taking care of the spaces we share.",
    image: "/flenzo/community/beach-cleanup.jpeg"
  },
  {
    id: "coastal-heritage",
    label: "KENYA SOUTH COASTAL HERITAGE",
    title: "A PLACE WITH A STORY.",
    text: "The South Coast carries generations of stories, movement and culture. Flenzo is part of that living landscape, inspired by the people, energy and character that make this coast what it is.",
    image: "/flenzo/community/coastal-heritage.jpeg"
  },
];


// Ocean image placeholder. Replace with a real Flenzo ocean photograph later.
const oceanImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=88";
// const heroImage = "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=88";
// const oceanImage = "/flenzo/impact/impact-img.jpeg";


const WHATSAPP_NUMBER = "254743405833";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

function Icon({ name, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const paths = {
    menu: <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>,
    bag: <><path d="M6 8h12l1 12H5L6 8Z" /><path d="M9 8a3 3 0 0 1 6 0" /></>,
    heart: <path d="M20.8 8.8c0 5-8.8 10-8.8 10S3.2 13.8 3.2 8.8A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z" />,
    search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 5 5" /></>,
    user: <><circle cx="12" cy="8" r="3.5" /><path d="M5 21c.8-3.8 3.1-5.8 7-5.8s6.2 2 7 5.8" /></>,
    x: <><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></>,
    arrow: <><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></>,
    plus: <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>,
    minus: <line x1="5" y1="12" x2="19" y2="12" />,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function App() {
  const [category, setCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("flenzo-wishlist") || "[]"));
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("flenzo-cart") || "[]"));
  const [selected, setSelected] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  useEffect(() => localStorage.setItem("flenzo-wishlist", JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => localStorage.setItem("flenzo-cart", JSON.stringify(cart)), [cart]);

  const filtered = useMemo(() => {
    return products.filter((product) =>
      (category === "All" || product.category === category) &&
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [category, query]);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  function toggleWishlist(id) {
    setWishlist((items) => items.includes(id) ? items.filter((x) => x !== id) : [...items, id]);
  }

  function addToCart(product, size = product.sizes[0], color = product.colors[0], quantity = 1) {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id && item.size === size && item.color === color);
      if (existing) {
        return items.map((item) => item === existing ? { ...item, qty: item.qty + quantity } : item);
      }

      return [
        ...items,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0].src,
          size,
          color,
          qty: quantity,
        },
      ];
    });

    setSelected(null);
    setCartOpen(true);
  }

  function updateQty(index, delta) {
    setCart((items) => items.map((item, i) =>
      i !== index ? item : { ...item, qty: Math.max(1, item.qty + delta) }
    ));
  }

  function removeCartItem(index) {
    setCart((items) => items.filter((_, i) => i !== index));
  }

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  function scrollToShop() {
    scrollTo("shop");
  }

  function selectCategory(value) {
    setCategory(value);
    scrollToShop();
  }

  function buildWhatsAppMessage(customerName = "", customerPhone = "") {
    const lines = [
      "Hi Flenzo Culture 👋",
      "",
      "I'd like to place an order:",
      ...cart.map((item) =>
        `• ${item.name} x${item.qty} | Size: ${item.size} | Color: ${item.color} | KSH ${(item.price * item.qty).toLocaleString()}`
      ),
      "",
      `Subtotal: KSH ${cartTotal.toLocaleString()}`,
      customerName ? `Name: ${customerName}` : "",
      customerPhone ? `Phone: ${customerPhone}` : "",
      "",
      "Please confirm availability and delivery details. Thank you!",
    ].filter(Boolean);

    return lines.join("\n");
  }

  function openWhatsAppOrder(customerName = "", customerPhone = "") {
    const message = encodeURIComponent(buildWhatsAppMessage(customerName, customerPhone));
    window.open(`${WHATSAPP_URL}?text=${message}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="app">
      <div className="announcement">FREE DELIVERY ON ORDERS OVER KSH 5,000 • DIANI / KENYA</div>

      <header className="header">
        <button className="icon-btn menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Icon name="menu" /></button>
        <button className="brand" onClick={() => { setCategory("All"); scrollTo("home"); }} aria-label="Flenzo Culture home">
          flen<span>z</span>o <b>culture</b>
        </button>
        <div className="header-actions">
          <button className="icon-btn desktop-only" onClick={() => setSearchOpen((value) => !value)} aria-label="Search"><Icon name="search" /></button>
          <button className="icon-btn" onClick={() => setCartOpen(true)} aria-label="Open cart">
            <Icon name="bag" /><span className="count">{cartCount}</span>
          </button>
        </div>
      </header>

      {searchOpen && (
        <div className="search-bar">
          <Icon name="search" size={19} />
          <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search Flenzo Culture..." />
          <button onClick={() => { setQuery(""); setSearchOpen(false); }} aria-label="Close search"><Icon name="x" size={18} /></button>
        </div>
      )}

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}>
          <aside className="side-menu" onClick={(event) => event.stopPropagation()}>
            <div className="side-top">
              <strong>FLENZO CULTURE</strong>
              <button className="icon-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu"><Icon name="x" /></button>
            </div>
            <nav>
              <button onClick={scrollToShop}>SHOP</button>
              <button onClick={() => scrollTo("culture")}>THE CULTURE</button>
              <button onClick={() => scrollTo("community")}>COMMUNITY</button>
              <button onClick={() => scrollTo("impact")}>IMPACT</button>
              <button onClick={() => { setMenuOpen(false); setAccountOpen(true); }}>MY ACCOUNT</button>
            </nav>
            <div className="menu-skate">
              <small>DIANI • SOUTH COAST</small>
              <h3>MOVE WITH THE CULTURE.</h3>
              <p>Streetwear, skateboarding, community and a connection to the coast.</p>
            </div>
          </aside>
        </div>
      )}

      <main>
        <section className="hero" id="home">
          <div className="hero-image" style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.28),rgba(0,0,0,0) 70%),url('${heroImage}')` }}></div>
          <div className="hero-copy">
            <p>DIANI • SOUTH COAST</p>
            <h1>WEAR THE<br /><em>CULTURE.</em></h1>
            <button className="dark-btn" onClick={scrollToShop}>SHOP THE DROP <Icon name="arrow" size={17} /></button>
          </div>
        </section>

        <section className="category-strip">
          {categories.map((value) => (
            <button key={value} className={category === value ? "active" : ""} onClick={() => selectCategory(value)}>{value}</button>
          ))}
        </section>

        <section className="section" id="shop">
          <div className="section-heading">
            <span></span><h2>{category === "All" ? "Flenzo Culture" : category}</h2><span></span>
          </div>

          <div className="product-grid">
            {filtered.map((product) => (
              <article className="product-card" key={product.id}>
                <div
                  className={`product-image-wrap product-${product.id}`}
                  onClick={() => setSelected(product)}
                >
                  <img src={product.images[0].src} alt={`${product.name} ${product.images[0].label}`} />
                  <span className="sale">{product.tag}</span>
                  <button
                    className={`wish ${wishlist.includes(product.id) ? "liked" : ""}`}
                    onClick={(event) => { event.stopPropagation(); toggleWishlist(product.id); }}
                    aria-label="Toggle wishlist"
                  >
                    <Icon name="heart" size={21} />
                  </button>
                </div>
                <div className="product-info">
                  <div className="brand-line"><span>Flenzo Culture</span><span className="rating">{product.rating} <b>★</b></span></div>
                  <h3 onClick={() => setSelected(product)}>{product.name}</h3>
                  <div className="price"><del>KSH {product.oldPrice.toLocaleString()}</del><strong>KSH {product.price.toLocaleString()}</strong></div>
                  <button className="select-btn" onClick={() => setSelected(product)}>SELECT OPTIONS <Icon name="arrow" size={15} /></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="culture-section section" id="culture">
          <div className="section-heading">
            <span></span><h2>THE CULTURE</h2><span></span>
          </div>
          <div className="culture-intro">
            <p className="eyebrow">FLENZO / SOUTH COAST / KENYA</p>

            <h2>
              WHAT YOU WEAR<br />
              CAN CONNECT YOU<br />
              <em>TO WHERE YOU LIVE.</em>
            </h2>

            <p>
              Flenzo was born on Kenya's South Coast, surrounded by movement,
              creativity, community and the Indian Ocean.
            </p>

            <p>
              We make clothing inspired by that energy, bringing a piece of the
              coast into everyday life. From the streets of Diani to the beach
              and beyond, every piece is part of a culture shaped by people,
              place and movement.
            </p>

            <div className="culture-values">
              <div>
                <span className="eyebrow">01 / PEOPLE</span>
                <p>
                  The community that gives the coast its energy.
                </p>
              </div>

              <div>
                <span className="eyebrow">02 / MOVEMENT</span>
                <p>
                  Skate. Play. Explore. Keep moving.
                </p>
              </div>

              <div>
                <span className="eyebrow">03 / COAST</span>
                <p>
                  The ocean and places that inspire us.
                </p>
              </div>
            </div>

            <div className="culture-cta">
              <div>
                <strong>WEAR THE PLACE. LIVE THE CULTURE.</strong>

                <p className="culture-support">
                  Every Flenzo purchase helps support community activities,
                  creative spaces and coastal initiatives that keep the culture moving.
                </p>
              </div>

              <button className="text-btn" onClick={() => scrollTo("community")}>
                EXPLORE THE COMMUNITY <Icon name="arrow" size={15} />
              </button>
            </div>
            <div className="culture-grid">
              {cultureStories.map((story, index) => (
                <article className={`culture-card culture-card-${index + 1}`} key={story.id}>
                  <div className={`culture-image ${story.id}`}><img src={story.image} alt={story.title} /></div>
                  <div className="culture-card-copy">
                    <p className="eyebrow">{story.label}</p>
                    <h3>{story.title}</h3>
                    <p>{story.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="community-section section" id="community">
          <div className="section-heading">
            <span></span><h2>COMMUNITY</h2><span></span>
          </div>
          <div className="community-intro">
            <p className="eyebrow">PEOPLE • PLAY • COAST</p>
            <h2>THE CULTURE<br /><em>IS SHARED.</em></h2>
            <p>
              Flenzo is built around more than clothing. It is about the people,
              movement and spaces that make the South Coast feel alive. From the
              beach to the streets, these are the moments and communities that
              inspire the culture.
            </p>
          </div>
          <div className="community-grid">
            {communityStories.map((story, index) => (
              <article className={`community-card community-card-${index + 1}`} key={story.id}>
                <div className={`community-image ${story.id}`}><img src={story.image} alt={story.title} /></div>
                <div className="community-copy">
                  <p className="eyebrow">{story.label}</p>
                  <h3>{story.title}</h3>
                  <p>{story.text}</p>
                  <button className="text-btn" onClick={() => scrollTo("impact")}>SEE THE CONNECTION <Icon name="arrow" size={15} /></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="impact-section" id="impact">
          <div className="impact-image" style={{ backgroundImage: `url('${oceanImage}')` }}></div>
          <div className="impact-overlay"></div>
          ```jsx
          <div className="impact-copy">
            <p className="eyebrow">FLENZO IMPACT / SOUTH COAST</p>

            <h2>
              WEAR SOMETHING<br />
              <em>THAT MEANS MORE.</em>
            </h2>

            <p>
              A Flenzo piece is more than something you put on.
              It carries the energy of the coast, the people around it,
              and the moments that bring us together.
            </p>

            <p>
              When you choose Flenzo, you become part of that story.
              Your support helps us keep creating moments for people to
              move, play, connect and give back to the places we call home.
            </p>

            <div className="impact-line">
              <span>01</span>
              <strong>MOVE.</strong>
              <span>Skate. Play. Explore.</span>
            </div>

            <div className="impact-line">
              <span>02</span>
              <strong>CONNECT.</strong>
              <span>People. Community. Culture.</span>
            </div>

            <div className="impact-line">
              <span>03</span>
              <strong>GIVE BACK.</strong>
              <span>Our coast. Our home.</span>
            </div>

            <p className="impact-note">
              The culture is alive because people show up for it.
              <br />
              <strong>Thank you for being part of it.</strong>
            </p>
          </div>
          ```

        </section>

        <section className="newsletter">
          <p className="eyebrow">JOIN THE CULTURE</p>
          <h2>First access to new drops.</h2>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" aria-label="Email address" />
            <button type="button">JOIN</button>
          </div>
          <small>No spam. Just drops, events and Flenzo news.</small>
        </section>
      </main>

      <footer>
        <div className="footer-brand">flen<span>z</span>o <b>culture</b></div>
        <div className="footer-location">DIANI • KENYA'S SOUTH COAST</div>
        <div className="footer-links">
          <a href="#shop">Shop</a>
          <a href="#culture">The Culture</a>
          <a href="#community">Community</a>
          <a href="#impact">Impact</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <p>© 2026 Flenzo Culture. Built for the culture.</p>
      </footer>

      <a className="whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        <span className="wa-icon">◉</span> CLICK TO WHATSAPP
      </a>

      <nav className="mobile-nav">
        <button onClick={scrollToShop}><Icon name="bag" /><span>Shop</span></button>
        <button onClick={() => { setCategory("All"); scrollTo("shop"); }}><Icon name="heart" /><span>Wishlist</span></button>
        <button onClick={() => setCartOpen(true)}><Icon name="bag" /><span>Cart</span>{cartCount > 0 && <b>{cartCount}</b>}</button>
        <button onClick={() => setAccountOpen(true)}><Icon name="user" /><span>My account</span></button>
      </nav>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} onAdd={addToCart} />}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          total={cartTotal}
          onClose={() => setCartOpen(false)}
          onQty={updateQty}
          onRemove={removeCartItem}
          onCheckout={() => { setCartOpen(false); setCheckoutOpen(true); }}
        />
      )}
      {checkoutOpen && (
        <CheckoutModal
          cart={cart}
          total={cartTotal}
          onClose={() => setCheckoutOpen(false)}
          onWhatsApp={openWhatsAppOrder}
        />
      )}
      {accountOpen && (
        <div className="overlay" onClick={() => setAccountOpen(false)}>
          <div className="account-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setAccountOpen(false)} aria-label="Close account"><Icon name="x" /></button>
            <Icon name="user" size={34} />
            <h2>My Account</h2>
            <p>Account login can be connected later. For this front-end version, your cart and wishlist are saved on this device.</p>
            <button className="dark-btn full" onClick={() => setAccountOpen(false)}>CONTINUE SHOPPING</button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductModal({ product, onClose, onAdd }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setSize(product.sizes[0]);
    setColor(product.colors[0]);
    setQty(1);
    setActiveImage(0);
  }, [product]);

  const currentImage = product.images[activeImage] || product.images[0];

  return (
    <div className="overlay" onClick={onClose}>
      <div className="product-modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close product"><Icon name="x" /></button>

        <div className="modal-gallery">
          <div className="modal-image">
            <img src={currentImage.src} alt={`${product.name} ${currentImage.label}`} />
          </div>
          {product.images.length > 1 && (
            <div className="image-thumbnails" aria-label="Product photos">
              {product.images.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  className={activeImage === index ? "active" : ""}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View ${image.label} photo`}
                >
                  <img src={image.src} alt="" />
                  <span>{image.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="modal-details">
          <p className="eyebrow">FLENZO CULTURE</p>
          <h2>{product.name}</h2>
          <div className="modal-rating">{product.rating} ★</div>
          <div className="modal-price"><del>KSH {product.oldPrice.toLocaleString()}</del> KSH {product.price.toLocaleString()}</div>

          <label>Color</label>
          <div className="choices">{product.colors.map((value) => <button className={color === value ? "chosen" : ""} key={value} onClick={() => setColor(value)}>{value}</button>)}</div>

          <label>Size</label>
          <div className="choices">{product.sizes.map((value) => <button className={size === value ? "chosen" : ""} key={value} onClick={() => setSize(value)}>{value}</button>)}</div>

          <div className="qty-row">
            <span>Quantity</span>
            <div>
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity"><Icon name="minus" size={16} /></button>
              <b>{qty}</b>
              <button onClick={() => setQty(qty + 1)} aria-label="Increase quantity"><Icon name="plus" size={16} /></button>
            </div>
          </div>

          <button className="dark-btn full" onClick={() => onAdd(product, size, color, qty)}>
            ADD TO CART • KSH {(product.price * qty).toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  );
}

function CartDrawer({ cart, total, onClose, onQty, onRemove, onCheckout }) {
  return (
    <div className="overlay" onClick={onClose}>
      <aside className="cart-drawer" onClick={(event) => event.stopPropagation()}>
        <div className="drawer-head"><h2>Your Cart</h2><button className="icon-btn" onClick={onClose} aria-label="Close cart"><Icon name="x" /></button></div>
        {cart.length === 0 ? (
          <div className="empty"><Icon name="bag" size={42} /><h3>Your cart is empty.</h3><p>Add something from the latest Flenzo drop.</p></div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item, index) => (
                <div className="cart-item" key={`${item.id}-${item.size}-${item.color}-${index}`}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-meta">
                    <h4>{item.name}</h4>
                    <small>{item.color} / {item.size}</small>
                    <strong>KSH {item.price.toLocaleString()}</strong>
                    <div className="qty-row">
                      <div>
                        <button onClick={() => onQty(index, -1)} aria-label="Decrease quantity"><Icon name="minus" size={14} /></button>
                        <b>{item.qty}</b>
                        <button onClick={() => onQty(index, 1)} aria-label="Increase quantity"><Icon name="plus" size={14} /></button>
                      </div>
                      <button className="remove" onClick={() => onRemove(index)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="checkout">
              <div><span>Subtotal</span><strong>KSH {total.toLocaleString()}</strong></div>
              <small>Checkout collects your details and lets you continue to WhatsApp. Real M-Pesa payment must be connected through a secure backend.</small>
              <button className="dark-btn full" onClick={onCheckout}>CHECKOUT</button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

function CheckoutModal({ cart, total, onClose, onWhatsApp }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("whatsapp");
  const [demoMessage, setDemoMessage] = useState("");

  function submit(event) {
    event.preventDefault();

    if (method === "whatsapp") {
      onWhatsApp(name, phone);
      return;
    }

    setDemoMessage("M-Pesa is prepared as a checkout option, but no real payment was made. A secure backend/Daraja integration must be connected before accepting live payments.");
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="checkout-modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close checkout"><Icon name="x" /></button>
        <div className="checkout-head">
          <p className="eyebrow">FLENZO CHECKOUT</p>
          <h2>READY TO ORDER?</h2>
          <p>Enter your details, then continue through WhatsApp. M-Pesa below is a frontend DEMO until a secure payment backend is connected.</p>
        </div>

        <div className="checkout-summary">
          {cart.map((item, index) => (
            <div key={`${item.id}-${index}`}><span>{item.name} × {item.qty}</span><strong>KSH {(item.price * item.qty).toLocaleString()}</strong></div>
          ))}
          <div className="summary-total"><span>Subtotal</span><strong>KSH {total.toLocaleString()}</strong></div>
        </div>

        <form onSubmit={submit}>
          <label>Name<input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" required /></label>
          <label>Phone number<input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="07xx xxx xxx" inputMode="tel" required /></label>

          <label>Order method</label>
          <div className="payment-choices">
            <button type="button" className={method === "whatsapp" ? "chosen" : ""} onClick={() => setMethod("whatsapp")}>WhatsApp Order</button>
            <button type="button" className={method === "mpesa" ? "chosen" : ""} onClick={() => { setMethod("mpesa"); setDemoMessage(""); }}>M-Pesa <span>DEMO</span></button>
          </div>

          {method === "mpesa" && <div className="demo-notice">DEMO ONLY • No payment is processed here. Live M-Pesa requires a secure backend and payment callback.</div>}
          {demoMessage && <div className="demo-notice">{demoMessage}</div>}

          <button className="dark-btn full" type="submit">
            {method === "whatsapp" ? "CONTINUE TO WHATSAPP" : "M-PESA PAYMENT • DEMO"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
