import type { TrackDescriptor } from "@/types/musicConfig";

/**
 * 侧栏音乐本地曲目数据源。
 * 遵循「零额外负担」原则：配置与数据解耦，此处专用于管理本地曲目列表。
 *
 * 添加曲目：在 musicTracks 中追加一项即可：
 * - id: 唯一标识
 * - title: 曲目标题
 * - artist: 艺术家（可选）
 * - cover: 封面图地址（可选；推荐相对 /src，亦支持 /public 或绝对 URL）
 * - source: 音频文件地址（相对 /public 或绝对 URL）
 * - duration: 曲目时长（秒，可选）
 */
export const musicTracks: readonly TrackDescriptor[] = [
	{
		id: "mac-anu",
		title: "rtown0 (Δ Server Aqua Capital Mac Anu)",
		artist: "BooHooWoo",
		cover:
			"https://nu.vgmtreasurechest.com/soundtracks/dot-hack-game-music-perfect-collection/00%20Front%20display.jpg",
		source:
			"https://nu.vgmtreasurechest.com/soundtracks/dot-hack-game-music-perfect-collection/tnklbwde/1-04%20rtown0%20%28%CE%94%20Server%20Aqua%20Capital%20Mac%20Anu%29.mp3",
		duration: 134,
	},
	{
		id: "carmina-gadelica",
		title: "rtown2 (Λ Server Cultural City Carmina Gadelica)",
		artist: "BooHooWoo",
		cover:
			"https://nu.vgmtreasurechest.com/soundtracks/dot-hack-game-music-perfect-collection/00%20Front%20display.jpg",
		source:
			"https://nu.vgmtreasurechest.com/soundtracks/dot-hack-game-music-perfect-collection/mqwiclxh/1-06%20rtown2%20%28%CE%9B%20Server%20Cultural%20City%20Carmina%20Gadelica%29.mp3",
		duration: 127,
	},
	{
		id: "breg-epona",
		title: "Dual City - Breg Epona",
		artist: "Chikayo Fukuda",
		cover:
			"https://lambda.vgmtreasurechest.com/soundtracks/dot-hack-g.u.-game-music-ost-2/00%20Front%20display.jpg",
		source:
			"https://lambda.vgmtreasurechest.com/soundtracks/dot-hack-g.u.-game-music-ost-2/pozhkgbl/2-05.%20Dual%20City%20-%20Breg%20Epona.mp3",
		duration: 178,
	},
	{
		id: "dazbee",
		title: "口笛で愛は歌えない",
		artist: "Dazbee",
		cover: "assets/images/music/dazbee.webp",
		source: "/assets/music/url/dazbee.mp3",
		duration: 241,
	},
	{
		id: "hitori",
		title: "ひとり上手",
		artist: "Kaya",
		cover: "assets/images/music/hitori.webp",
		source: "/assets/music/url/hitori.mp3",
		duration: 253,
	},
	{
		id: "xryx",
		title: "眩耀夜行",
		artist: "スリーズブーケ",
		cover: "assets/images/music/xryx.webp",
		source: "/assets/music/url/xryx.mp3",
		duration: 245,
	},
	{
		id: "cl",
		title: "春雷の頃",
		artist: "22/7",
		cover: "assets/images/music/cl.webp",
		source: "/assets/music/url/cl.mp3",
		duration: 242,
	},
];
