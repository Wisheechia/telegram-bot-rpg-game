import bot from "../../core/bot";

const launch = async (): Promise<void> => {
	console.log("command: /launch", "launch.ts:launch()");

	await bot.start();
};

export { launch };
export default launch;
