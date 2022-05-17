import "../App.css";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";

export default function ChartData(props) {

	const [primaryData, setPrimaryData] = useState([]);

	useEffect(() => {
		setPrimaryData(props.filteredData)
	},[props.filteredData])
	let sortableData = primaryData;

	sortableData.sort((a, b) => (b.date.yyyy - a.date.yyyy) && (b.date.mm - a.date.mm) );


	let chartData = [
		{ timestamp: new Date(2021, 10, 6, 11, 13, 30, 0), response: 0, date: {yyyy: 2021, mm: 10}, score: 9 },
		{ timestamp: new Date(2021, 10, 6, 11, 13, 30, 1), response: 1, date: {yyyy: 2021, mm: 10}, score: 9 },
		{ timestamp: new Date(2021, 10, 6, 11, 13, 30, 2), response: 2, date: {yyyy: 2021, mm: 10}, score: 5 },
		{ timestamp: new Date(2021, 10, 6, 11, 13, 30, 3), response: 3, date: {yyyy: 2021, mm: 10}, score: 7 },
		{ timestamp: new Date(2021, 10, 6, 11, 13, 30, 4), response: 4, date: {yyyy: 2021, mm: 10}, score: 6 },
		{ timestamp: new Date(2021, 10, 6, 11, 13, 30, 5), response: 5, date: {yyyy: 2021, mm: 10}, score: 9 },
		{ timestamp: new Date(2021, 10, 6, 11, 13, 30, 6), response: 6, date: {yyyy: 2021, mm: 10}, score: 9 },
		{ timestamp: new Date(2021, 10, 6, 11, 13, 30, 7), response: 7, date: {yyyy: 2021, mm: 10}, score: 9 },
		{ timestamp: new Date(2021, 11, 6, 11, 13, 30, 6), response: 8, date: {yyyy: 2021, mm: 11}, score: 9 },
		{ timestamp: new Date(2021, 11, 6, 11, 13, 30, 8), response: 9, date: {yyyy: 2021, mm: 11}, score: 9 },
		{ timestamp: new Date(2022, 0, 6, 11, 13, 30, 8), response: 10, date: {yyyy: 2022, mm: 0}, score: 9 },
		{ timestamp: new Date(2022, 0, 6, 11, 13, 30, 9), response: 11, date: {yyyy: 2022, mm: 0}, score: 8 },
		{ timestamp: new Date(2022, 1, 6, 11, 13, 30, 10), response: 12, date: {yyyy: 2022, mm: 1}, score: 9 },
		{ timestamp: new Date(2022, 2, 6, 11, 13, 30, 8), response: 13, date: {yyyy: 2022, mm: 2}, score: 9 },
		{ timestamp: new Date(2022, 2, 6, 11, 13, 30, 9), response: 14, date: {yyyy: 2022, mm: 2}, score: 9 },
		{ timestamp: new Date(2022, 2, 6, 11, 13, 30, 10), response: 15, date: {yyyy: 2022, mm: 2}, score: 9 },
		{ timestamp: new Date(2022, 3, 6, 11, 13, 30, 8), response: 16, date: {yyyy: 2022, mm: 3}, score: 8 },
		{ timestamp: new Date(2022, 3, 6, 11, 13, 30, 9), response: 17, date: {yyyy: 2022, mm: 3}, score: 9 },
		{ timestamp: new Date(2022, 3, 6, 11, 13, 30, 11), response: 18, date: {yyyy: 2022, mm: 3}, score: 9 },

	];

	chartData.sort((a, b) => b.timestamp - a.timestamp); 

	let month6 = [];
	let month5 = [];
	let month4 = [];
	let month3 = [];
	let month2 = [];
	let month1 = [];

	let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	let npsData = chartData;

	let npsCalc = npsCalcArr => {
		if (npsCalcArr.length === 0) return "data missing to count nps score";
		let npsScore;
		let scores = [];

		for (let i = 0; i < npsCalcArr.length; i++) {
			scores.push(npsCalcArr[i].score);
		}

		let promoters = 0;
		let detractors = 0;
		
		for (let j = 0; j < scores.length; j++) {
			if (scores[j] >= 9) promoters++;
			if (scores[j] <= 6) detractors++;
		}

		let totalNumOfFeedback = scores.length;
		let passives = totalNumOfFeedback - (promoters + detractors);

		npsScore = Math.round(
			((promoters - detractors) / totalNumOfFeedback) * 100
		);

		return {
			npsScore: npsScore,
			promoters: promoters,
			detractors: detractors,
			passives: passives,
			totalNumOfFeedback: totalNumOfFeedback,
		};
	};

	let yearMonth6 = {
		yyyy: 0,
		mm: 0,
		monthName: "",
		npsInfo: {
			promoters: 0,
			passives: 0,
			detractors: 0,
			npsScore: 0,
		}
	};
	let yearMonth5 = {
		yyyy: 0,
		mm: 0,
		monthName: "",
		npsInfo: {
			promoters: 0,
			passives: 0,
			detractors: 0,
			npsScore: 0,			
		}
	};
	let yearMonth4 = {
		yyyy: 0,
		mm: 0,
		monthName: "",
		npsInfo: {
			promoters: 0,
			passives: 0,
			detractors: 0,
			npsScore: 0,			
		}
	};
	let yearMonth3 = {
		yyyy: 0,
		mm: 0,
		monthName: "",
		npsInfo: {
			promoters: 0,
			passives: 0,
			detractors: 0,
			npsScore: 0,			
		}
	};
	let yearMonth2 = {
		yyyy: 0,
		mm: 0,
		monthName: "",
		promoters: 0,
		npsInfo: {
			passives: 0,
			detractors: 0,
			npsScore: 0,			
		}
	};
	let yearMonth1 = {
		yyyy: 0,
		mm: 0,
		monthName: "",
		npsInfo: {
			promoters: 0,
			passives: 0,
			detractors: 0,
			npsScore: 0,			
		}
	};

	let today = new Date();
	today.setMonth(today.getMonth() - 1);
	yearMonth6.yyyy = today.getFullYear();
	yearMonth6.mm = today.getMonth();
	yearMonth6.monthName = month[today.getMonth()];

	today.setMonth(today.getMonth() - 1);
	yearMonth5.yyyy = today.getFullYear();
	yearMonth5.mm = today.getMonth();
	yearMonth5.monthName = month[today.getMonth()];

	today.setMonth(today.getMonth() - 1);
	yearMonth4.yyyy = today.getFullYear();
	yearMonth4.mm = today.getMonth();
	yearMonth4.monthName = month[today.getMonth()];

	today.setMonth(today.getMonth() - 1);
	yearMonth3.yyyy = today.getFullYear();
	yearMonth3.mm = today.getMonth();
	yearMonth3.monthName = month[today.getMonth()];

	today.setMonth(today.getMonth() - 1);
	yearMonth2.yyyy = today.getFullYear();
	yearMonth2.mm = today.getMonth();
	yearMonth2.monthName = month[today.getMonth()];

	today.setMonth(today.getMonth() - 1);
	yearMonth1.yyyy = today.getFullYear();
	yearMonth1.mm = today.getMonth();
	yearMonth1.monthName = month[today.getMonth()];

	for(let b = 0; b < npsData.length; b++){
		if(npsData[b].date.yyyy === yearMonth6.yyyy && npsData[b].date.mm === yearMonth6.mm){
			month6.push(npsData[b]);
		}
		else if(npsData[b].date.yyyy === yearMonth5.yyyy && npsData[b].date.mm === yearMonth5.mm){
			month5.push(npsData[b]);
		}
		else if(npsData[b].date.yyyy === yearMonth4.yyyy && npsData[b].date.mm === yearMonth4.mm){
			month4.push(npsData[b]);
		}
		else if(npsData[b].date.yyyy === yearMonth3.yyyy && npsData[b].date.mm === yearMonth3.mm){
			month3.push(npsData[b]);
		}
		else if(npsData[b].date.yyyy === yearMonth2.yyyy && npsData[b].date.mm === yearMonth2.mm){
			month2.push(npsData[b]);
		}
		else if(npsData[b].date.yyyy === yearMonth1.yyyy && npsData[b].date.mm === yearMonth1.mm){
			month1.push(npsData[b]);
		}
	}
	
	yearMonth6.npsInfo = npsCalc(month6);
	yearMonth5.npsInfo = npsCalc(month5);
	yearMonth4.npsInfo = npsCalc(month4);
	yearMonth3.npsInfo = npsCalc(month3);
	yearMonth2.npsInfo = npsCalc(month2);
	yearMonth1.npsInfo = npsCalc(month1);


	const scores = [
		{
			name: yearMonth1.monthName,
			promoters: yearMonth1.npsInfo.promoters,
			passive: yearMonth1.npsInfo.passives,
			detractors: yearMonth1.npsInfo.detractors,
			nps: yearMonth1.npsInfo.npsScore,
		},
		{
			name: yearMonth2.monthName,
			promoters: yearMonth2.npsInfo.promoters,
			passive: yearMonth2.npsInfo.passives,
			detractors: yearMonth2.npsInfo.detractors,
			nps: yearMonth2.npsInfo.npsScore,
		},
		{
			name: yearMonth3.monthName,
			promoters: yearMonth3.npsInfo.promoters,
			passive: yearMonth3.npsInfo.passives,
			detractors: yearMonth3.npsInfo.detractors,
			nps: yearMonth3.npsInfo.npsScore,
		},
		{
			name: yearMonth4.monthName,
			promoters: yearMonth4.npsInfo.promoters,
			passive: yearMonth4.npsInfo.passives,
			detractors: yearMonth4.npsInfo.detractors,
			nps: yearMonth4.npsInfo.npsScore,
		},
		{
			name: yearMonth5.monthName,
			promoters: yearMonth5.npsInfo.promoters,
			passive: yearMonth5.npsInfo.passives,
			detractors: yearMonth5.npsInfo.detractors,
			nps: yearMonth5.npsInfo.npsScore,
		},
		{
			name: yearMonth6.monthName,
			promoters: yearMonth6.npsInfo.promoters,
			passive: yearMonth6.npsInfo.passives,
			detractors: yearMonth6.npsInfo.detractors,
			nps: yearMonth6.npsInfo.npsScore,
		},
	];
	
	const data = {
		labels: [yearMonth1.monthName, yearMonth2.monthName, yearMonth3.monthName, yearMonth4.monthName, yearMonth5.monthName, yearMonth6.monthName],
		datasets: [
			{
				label: "NPS",
				data: scores.map((scores) => scores.nps),
				borderColor: "#512768",
				backgroundColor: "#512768",
				yAxisID: "y1",
				type: "line",
			},
			{
				label: "Promoters",
				data: scores.map((scores) => scores.promoters),
				borderColor: "#05A8AA",
				backgroundColor: "#05A8AA",
				yAxisID: "y",
				type: "bar",
				stacked: true,
				barThickness: 20,
			},
			{
				label: "Passive",
				data: scores.map((scores) => scores.passive),
				borderColor: "#FFCB5C",
				backgroundColor: "#FFCB5C",
				yAxisID: "y",
				type: "bar",
				stacked: true,
				barThickness: 20,
			},
			{
				label: "Detractors",
				data: scores.map((scores) => scores.detractors),
				borderColor: "#F07F4E",
				backgroundColor: "#F07F4E",
				yAxisID: "y",
				type: "bar",
				stacked: true,
				barThickness: 20,
			},
		],
	};
	
	let delayed;
	return (
		<div className="chart-wrapper">
			<div className="card-header-wrapper">
				<div className="cards-header">NPS &amp; Responses Trends </div>
				<div className="card-header-dates">01.01.2022-30.06.2022</div>
			</div>
			<div className="chart">
				<Bar
					type="bar"
					data={data}
					options={{
						animation: {
							onComplete: () => {
								delayed = true;
							},
							delay: (context) => {
								let delay = 0;
								if (
									context.type === "data" &&
									context.mode === "default" &&
									!delayed
								) {
									delay = context.dataIndex * 300 + context.datasetIndex * 100;
								}
								return delay;
							},
						},
						responsive: true,
						interaction: {
							mode: "index",
							intersect: false,
						},
						plugins: {
							title: {
								display: true,
								padding: 10,
							},
						},
						scales: {
							x: {
								stacked: true,
							},
							y: {
								type: "linear",
								display: true,
								position: "left",
								stacked: true,
								borderColor: "rgb(0, 0, 255)",
								title: {
									display: true,
									text: "NPS Responses",
									padding: 10,
								},
							},
							y1: {
								type: "linear",
								display: true,
								position: "right",
								title: {
									display: true,
									text: "NPS Score",
									padding: 10,
								},
								// grid line settings
								grid: {
									drawOnChartArea: false,
								},
							},
						},
					}}
				/>
			</div>
		</div>
	);
}
