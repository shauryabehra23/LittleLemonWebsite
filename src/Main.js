import p1 from './images/p1.webp';
import p2 from './images/p2.webp';
import p3 from './images/p3.webp';
import f1 from './images/f1.jpg';
import f2 from './images/f2.jpeg';
import f3 from './images/f3.jpg';
import star3 from './images/3star.png';
import star4 from './images/4star.png';
import star5 from './images/5star.png';
import Card from './Card';

export default function Main() {
    return (
        <main className="main">
            <section className="highlights">
                <Card image={f1} title="Margarita Pizza" food={true} price="$35.60" text="A classic Italian favorite, our Margarita Pizza features a thin, crispy crust topped with rich tomato sauce, creamy mozzarella cheese, and fresh basil leaves. Simple yet flavorful, it’s the perfect choice for pizza lovers who appreciate traditional tastes."/>
                <Card image={f3} title="Tabouli" food={true} price="$45.60" text="Tabouli is a refreshing Mediterranean salad made with finely chopped parsley, ripe tomatoes, bulgur wheat, and a zesty lemon-olive oil dressing. Light and healthy, this dish bursts with fresh flavors and is a delightful accompaniment to any meal."/>
                <Card image={f2} title="Moroccan Tagine" food={true} price="$55.60" text="Our Moroccan Tagine is a slow-cooked stew brimming with tender vegetables, aromatic spices, and your choice of protein. Served in a traditional clay pot, this dish offers a warm, comforting taste of North African cuisine with every bite."/>
            </section>
            <section className="testimonials">
                <Card
                    image={p1}
                    title="Priya S."
                    food={false}
                    price="0"
                    text="Little Lemon has such a warm and inviting atmosphere. The staff made us feel right at home!"
                    stars={star5}
                />
                <Card
                    image={p2}
                    title="Alex M."
                    food={false}
                    price="0"
                    text="Amazing service and delicious food. I’ll definitely be coming back with friends!"
                    stars={star3}
                />
                <Card
                    image={p3}
                    title="Rohan K."
                    food={false}
                    price="0"
                    text="A delightful dining experience—everything from the ambiance to the flavors was perfect."
                    stars={star4}
                />
            </section>
        </main>
    )
}