import styles from './Layout.module.scss';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

export default function Layout({ title, children, styleName }) {
	//컴포넌트 마운트시 변경할 state추가
	const [IsOn, setIsOn] = useState(false);
	//가상돔 요소를 document.qurrySelector를 쓰지말고 실시간으로 참조하고 싶을 떼
	//빈 참조갹체를 useRef로 생성
	const frame = useRef(null);
	const isOn = useRef(false);

	useEffect(() => {
		console.log('page변경');
		//컴포넌트 마운트시 한번만 호출
		//컴포넌트 마운트시 IsOn값을 true로 변경
		//IsOn을 useRef가 아닌 state로 변경해야 되는 이유
		//useRef값을 변경해도 리액트는 변경점을 인지 못해서 재렌더링이 안되기 때문에
		setIsOn(true);
	}, []);
	return (
		//참조하고싶은 가상돔 요소에 ref로 연결
		<section
			ref={frame}
			//IsOn State가 true 일떄에만 on 클래스명 적용
			className={clsx(styles.layout, styleName, IsOn ? styles.on : '')}
		>
			<figure></figure>

			<div className={clsx(styles.content)}>
				<h1>{title}</h1>
				{children}
			</div>
		</section>
	);
}
