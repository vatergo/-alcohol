import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [name, setName] = useState('');


	useEffect(() => {
		bridge.subscribe(({ detail: { type, data } }) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			const name = await bridge.send("VKWebAppStorageGet", { "keys": ["input"] });
			setUser(user);
			setName(name.keys[0].value ? name.keys[0].value : '');
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const onChange = ({ target }) => {
		setName(target.value);
	};

	const onAdd = () => {
		bridge.send("VKWebAppStorageSet", { "key": "input", "value": `${name}` }).then(e => console.log(e));
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} onChange={onChange} name={name} onAdd={onAdd} />
			<Persik id='persik' go={go} />
		</View>
	);
}

export default App;

