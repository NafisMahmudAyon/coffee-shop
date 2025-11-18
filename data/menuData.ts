export interface MenuItem {
	id: number;
	name: string;
	description: string;
	price: string;
	category: "Hot" | "Cold";
	image: string;
}

export const menuItems: MenuItem[] = [
	{
		id: 1,
		name: "Espresso",
		description: "A strong, bold shot of pure coffee flavor.",
		price: "$3.50",
		category: "Hot",
		image: "/espresso.jpg",
	},
	{
		id: 2,
		name: "Cappuccino",
		description: "Espresso topped with steamed milk and a light foam.",
		price: "$4.50",
		category: "Hot",
		image: "/cappuccino.jpg",
	},
	{
		id: 3,
		name: "Latte",
		description: "Smooth espresso blended with velvety steamed milk.",
		price: "$4.75",
		category: "Hot",
		image: "/latte.jpg",
	},
	{
		id: 4,
		name: "Iced Coffee",
		description: "Chilled brewed coffee served over ice.",
		price: "$3.75",
		category: "Cold",
		image: "/iced-coffee.jpg",
	},
	{
		id: 5,
		name: "Americano",
		description: "Espresso diluted with hot water for a milder taste.",
		price: "$3.25",
		category: "Hot",
		image: "/americano.jpg",
	},
	{
		id: 6,
		name: "Mocha",
		description: "Espresso with chocolate syrup and steamed milk.",
		price: "$5.00",
		category: "Hot",
		image: "/mocha.jpg",
	},
	{
		id: 7,
		name: "Cold Brew",
		description: "Slow‑steeped coffee served cold, smooth and low‑acid.",
		price: "$4.25",
		category: "Cold",
		image: "/cold-brew.jpg",
	},
	{
		id: 8,
		name: "Frappuccino",
		description: "Blended iced coffee with cream and a hint of sweetness.",
		price: "$5.50",
		category: "Cold",
		image: "/frappuccino.jpg",
	},
];

export interface Testimonial {
	id: number;
	name: string;
	rating: number;
	text: string;
	avatar: string;
	avatarUrl: string;
}

export const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Sarah Johnson",
		rating: 5,
		text: "Best coffee in town! The atmosphere is cozy and the baristas are incredibly friendly.",
		avatar: "SJ",
		avatarUrl:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764",
	},
	{
		id: 2,
		name: "Michael Chen",
		rating: 4,
		text: "Their cold brew is absolutely perfect. I come here every morning before work!",
		avatar: "MC",
		avatarUrl:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687",
	},
	{
		id: 3,
		name: "Emma Williams",
		rating: 5,
		text: "Love the variety of drinks and the warm ambiance. My favorite spot to work remotely.",
		avatar: "EW",
		avatarUrl:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761",
	},
	{
		id: 4,
		name: "John Doe",
		rating: 5,
		text: "A hidden gem! The espresso is rich and flavorful, and the pastries are to die for.",
		avatar: "JD",
		avatarUrl:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687",
	},
];
