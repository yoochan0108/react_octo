import styles from './Layout.module.scss';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

export default function Layout({ title, children, styleName }) {
	const [IsOn, setIsOn] = useState(false);
	const frame = useRef(null);
	const tit = useRef(null);

	const splitText = (ref, gap = 0.1, delay = 0) => {
		let count = 0;
		let tags = '';
		for (let letter of ref.current.innerText) {
			tags += `<span style='transition=delay:${gap * count + delay}s'>${letter}</span>`;
			count++;
		}

		ref.current.innerText = '';
		ref.current.innerHTML = tags;
	};

	useEffect(() => {
		setIsOn(true);
		//컴포넌트가 마운트되자마자 h1요소가 담겨있는 참조객체를 인수로 전달해서 글자 분리
		splitText(tit, 0.1, 0.5);
	}, []);
	return (
		<section ref={frame} className={clsx(styles.layout, styleName, IsOn ? styles.on : '')}>
			<figure></figure>

			<div className={clsx(styles.content)}>
				<h1 ref={tit}>{title}</h1>
				{children}
			</div>
		</section>
	);
}
