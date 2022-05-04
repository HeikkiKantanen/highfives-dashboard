import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collectionGroup, getDocs, query } from 'firebase/firestore';
import { PieChart, Pie, Cell, Label, Tooltip } from 'recharts';
import '../App.css';

export default function ScoreInfo() {
	const [npsScore, setNpsScore] = useState();
	const [promoters, setPromoters] = useState();
	const [passives, setPassives] = useState();
	const [detractors, setDetractors] = useState();
	const [total, setTotal] = useState();
	const [npsdata, setNpsdata] = useState([]);

	useEffect(() => {
		showNpsScore();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const showNpsScore = async () => {
		const data = query(collectionGroup(db, 'values'));
		const querySnapshot = await getDocs(data);

		const allResults = [];

		querySnapshot.forEach((doc) => {
			allResults.push(doc.data());
		});

		const scores = [];

		for (let answer of allResults) {
			scores.push(answer.score);
		}

		let promoters = 0;
		let detractors = 0;
		let passives = 0;

		let i = 0;
		let l = scores.length;

		for (i; i < l; i++) {
			if (scores[i] >= 9) promoters++;
			if (scores[i] <= 6) detractors++;
			if (scores[i] > 6 && scores[i] < 9) passives++;
		}
		const npsScoreCalc = Math.round((promoters / l - detractors / l) * 100);
		setNpsScore(npsScoreCalc);

		setPromoters(promoters);
		setPassives(passives);
		setDetractors(detractors);
		setTotal(l);

		setNpsdata([
			{ name: 'promoters', value: promoters },
			{ name: 'passives', value: passives },
			{ name: 'detractors', value: detractors },
		]);
	};

	const COLORS = ['#05A8AA', '#FFCB5C', '#F07F4E'];

	return (
		<div className="nps-wrapper">
			<div className="card-header-wrapper">
				<div className="cards-header">Net Promoter Score</div>
				<div className="card-header-dates">01.01.2022-30.06.2022</div>
			</div>
			<div className="scoreItem">
				<PieChart width={100} height={100}>
					<Pie
						data={npsdata}
						innerRadius={35}
						outerRadius={50}
						paddingAngle={2}
						dataKey="value"
					>
						{npsdata.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}

						<Label value={npsScore} position="center" fontSize="2rem" />
					</Pie>
					<Tooltip />
				</PieChart>
				<div className="nps-categories">
					<p>
						<span className="sum-number">{promoters}</span> promoters
					</p>
					<p>
						<span className="sum-number">{passives}</span> passives
					</p>
					<p>
						<span className="sum-number">{detractors} </span>detractors
					</p>
					<p>
						<span className="sum-number">{total} </span>total responses
					</p>
				</div>
			</div>
		</div>
	);
}
