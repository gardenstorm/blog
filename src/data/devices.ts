/**
 * 设备展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/devicesConfig.ts 控制。
 */
import type { DeviceItem } from "@/types/devicesConfig";

export const devicesData: DeviceItem[] = [
	{
		id: "pc-2015",
		name: "2015 PC Build",
		brand: "Various",
		category: "desk",
		status: "active",
		specs: "i5 4590 / 16GB / 250GB SSD / R9 270",
		description:
			"My 1st custom PC build. Using until I can bring my 2nd build over. Works fine for everyday tasks and coding. Running Fedora KDE.",
		icon: "material-symbols:desktop-windows-outline-rounded",
		featured: true,
		year: "2015",
	},
	{
		id: "xps-2019",
		name: "2019 XPS 13",
		brand: "Dell",
		category: "mobile",
		status: "active",
		specs: "i5 4590 / 8GB / 250GB SSD ",
		description:
			"My secondary computer for working away from my desk. Ultrabook that still works well for coding, research, and documents. Running Windows 11.",
		icon: "material-symbols:laptop-windows-rounded",
		featured: true,
		year: "2019",
		link: "https://www.dell.com/en-us/shop/dell-laptops/xps-13/spd/xps-13-9320",
	},
	{
		id: "samsung-galaxy-s24-ultra",
		name: "Samsung Galaxy S24 Ultra",
		brand: "Samsung",
		category: "mobile",
		status: "active",
		specs: "Titanium Violet / 256GB",
		description:
			"My main phone with nice cameras, a stylus that works as a remote shutter, and has a good battery.",
		icon: "material-symbols:mobile",
		featured: true,
		year: "2024",
	},
	{
		id: "ipad-pro-11",
		name: 'iPad Pro 11"',
		brand: "Apple",
		category: "mobile",
		status: "active",
		specs: "Space Gray / 128GB",
		description:
			"Third computer for reading, research, media consumption, and gaming. Also a digital notebook and sketchbook with the Apple Pencil.",
		icon: "material-symbols:tablet-mac-rounded",
		year: "2021",
	},
	{
		id: "pc-2020",
		name: "2020 PC Build",
		brand: "Various",
		category: "desk",
		status: "backup",
		specs: "Ryzen 5 3600 / 16GB / 250GB M.2 + 1TB M.2 / 1660 Ti",
		description:
			"My 2nd custom PC build. Waiting for me across the country. Great for coding, graphics work, and 1080p gaming. Running Windows 10.",
		icon: "material-symbols:desktop-windows-outline-rounded",
		featured: false,
		year: "2020",
	},
	{
		id: "akko-5075",
		name: "Akko 5075",
		brand: "Akko",
		category: "peripheral",
		status: "backup",
		specs: "Moonlight White / Lavender Switches",
		description:
			"Custom gasket-mounted keyboard built with a DIY kit from Akko. Has VIA support for custom keymaps and lighting. Waiting for me along with my 2nd PC build.",
		icon: "material-symbols:keyboard-outline-rounded",
		year: "2023",
	},
];

/** 获取所有设备数据列表 */
export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
