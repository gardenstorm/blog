/**
 * 游戏展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/gamesConfig.ts 控制。
 *
 * 封面支持三种写法：
 * - src/assets 相对路径（如本文件所用，走 Astro 图片管线自动优化为 webp/avif）；
 * - /public 绝对路径（如 "/assets/games/xxx.webp"，原样输出）；
 * - 远程 URL（https://…）。
 *
 * 注：以下为演示条目——评分 / 时长 / 状态是占位数值，请按自己的实际情况调整；
 * 封面取自各游戏官方商店页或官网主视觉。
 */
import type { GameItem } from "@/types/gamesConfig";

export const gamesData: GameItem[] = [
	{
		id: "genshin",
		name: "Genshin Impact",
		developer: "HoYoverse",
		category: "open-world",
		status: "playing",
		cover: "assets/games/yihuan-hero.jpg",
		icon: "material-symbols:explore-outline-rounded",
		rating: 4,
		hours: 420,
		platform: "iPad, Android",
		year: "2020",
		tags: ["Open World", "RPG", "Action", "Anime", "Gacha"],
		description:
			"Traverse the land of Teyvat in pursuit of your twin sibling and unravel the secrets of the world.",
		link: "https://genshin.hoyoverse.com/",
		featured: true,
	},
	/**{
		id: "minecraft",
		name: "Minecraft",
		developer: "Mojang Studios",
		category: "sandbox",
		status: "playing",
		cover: "assets/games/minecraft-hero.jpg",
		icon: "material-symbols:widgets-rounded",
		rating: 5,
		hours: 420,
		platform: "PC",
		year: "2011",
		tags: ["Sandbox", "Survival", "Building"],
		description:
			"A blocky sandbox where you mine, craft and build across procedurally generated worlds. Survive the night, or just keep building — alone or with friends.",
		link: "https://www.minecraft.net/",
	},**/
];
