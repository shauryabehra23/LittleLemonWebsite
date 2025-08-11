import React from 'react';

function AboutUs() {

    const scrollref= React.useRef(null);
    React.useEffect(() => {
        if(scrollref.current){
            scrollref.current.scrollIntoView({behavior:'smooth', block:'start'})
        }
    },[])

  return (
    <main ref={scrollref} style={{ padding: '2rem', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#333' }}>
      <section style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#2E8B57', textAlign: 'center' }}>About Little Lemon</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem' }}>
          Welcome to <strong>Little Lemon</strong>, your authentic Mediterranean escape nestled in the heart of the city.
          We pride ourselves on bringing the vibrant flavors and warm hospitality of the Mediterranean right to your table.
        </p>

        <section style={{ marginTop: '2rem', backgroundColor: '#FFF9F0', padding: '1.5rem', borderRadius: '8px' }}>
          <h2 style={{ color: '#E07A5F' }}>Our Cuisine</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>
            At Little Lemon, every dish is crafted with fresh, locally sourced ingredients and authentic Mediterranean recipes,
            blending the best of Greek, Italian, Lebanese, and Moroccan cuisines. From vibrant salads and savory kebabs
            to homemade breads and decadent desserts — each bite tells a story.
          </p>
        </section>

        <section style={{ marginTop: '2rem', backgroundColor: '#F0FFF4', padding: '1.5rem', borderRadius: '8px' }}>
          <h2 style={{ color: '#4CAF50' }}>Our Atmosphere</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>
            Our restaurant is designed to evoke the feeling of dining by the Mediterranean shore, with warm colors,
            natural textures, and a welcoming ambiance. Whether you're here for a family dinner, a romantic evening,
            or a casual lunch, Little Lemon offers a cozy and inviting space for all occasions.
          </p>
        </section>

        <section style={{ marginTop: '2rem', fontStyle: 'italic', color: '#777', textAlign: 'center' }}>
          <p>Come savor the taste of the Mediterranean — we can't wait to welcome you!</p>
        </section>
      </section>
    </main>
  );
}

export default AboutUs;
