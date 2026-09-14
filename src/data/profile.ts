export type ProfileLink = {
	label: string;
	detail: string;
	href: string;
	tone?: 'hot';
	icon: 'twitch' | 'book' | 'instagram' | 'x' | 'tiktok';
	external?: boolean;
};

export const profile = {
	username: '@quesocalientev0',
	name: 'Queso Caliente',
	bio: 'Soy Ingeniero en Informática. Me apasionan la tecnología, los videojuegos y crear pixel art. Sígueme en Twitch e Instagram',
	links: [
		{ label: 'Ver a Queso Caliente en directo', detail: 'Sígueme en Twitch', href: 'https://www.twitch.tv/quesocalientev0', tone: 'hot', icon: 'twitch', external: true },
		{ label: 'Visita mi blog', detail: 'Artículos sobre tecnología', href: 'https://www.quesocaliente.dev/blog', icon: 'book', external: true },
		{ label: 'Sígueme en X', detail: '@Quesocalientev0', href: 'https://x.com/Quesocalientev0', icon: 'x', external: true },
		{ label: 'Sígueme en Instagram', detail: 'Comparto mi pixel art', href: 'https://www.instagram.com/quesocalientev0/', icon: 'instagram', external: true },
		{ label: 'Sígueme en TikTok', detail: '@quesosinjamon', href: 'https://www.tiktok.com/@quesosinjamon', icon: 'tiktok', external: true },
	] satisfies ProfileLink[],
};

export const socials = [
	{ label: 'Twitch', href: 'https://www.twitch.tv/quesocalientev0', icon: 'twitch' },
	{ label: 'X', href: 'https://x.com/Quesocalientev0', icon: 'x' },
	{ label: 'Instagram', href: 'https://www.instagram.com/quesocalientev0/', icon: 'instagram' },
	{ label: 'TikTok', href: 'https://www.tiktok.com/@quesosinjamon', icon: 'tiktok' },
] as const;
