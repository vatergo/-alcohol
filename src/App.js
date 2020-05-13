import React, { Component } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import ModalRoot from '@vkontakte/vkui/dist/components/ModalRoot/ModalRoot';
import ModalCard from '@vkontakte/vkui/dist/components/ModalCard/ModalCard';
import Link from '@vkontakte/vkui/dist/components/Link/Link';
import '@vkontakte/vkui/dist/vkui.css';
import Icon56FireOutline from '@vkontakte/icons/dist/56/fire_outline';

import Settings from './panels/Settings';
import Main from './panels/Main';
import Organism from './panels/Organism';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activePanel: 'main',
			popout: <ScreenSpinner size='large' />,
			activeModal: null,
		};
		this.fetchData = this.fetchData.bind(this);
	}

	componentDidMount() {
		bridge.subscribe(({ detail: { type, data } }) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		this.fetchData();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.activePanel !== prevState.activePanel) {
			this.fetchData();
		}
	}

	fetchData() {
		bridge.send("VKWebAppStorageGet", { "keys": ["info"] })
			.then((data) => {
				if (data.keys[0].value) {
					this.setState({
						popout: null,
						dataset: data.keys[0].value.split(','),
					});
				} else {
					this.setState({
						activePanel: 'settings',
						popout: null,
					});
				}
			})
			.catch((e) => {
				console.log(e);
				this.setState({
					activePanel: 'settings',
					popout: null,
				});
			});
	}

	go(activePanel) {
		this.fetchData();
		this.setState({ activePanel });
	}

	modal(activeModal) {
		this.setState({ activeModal });
	}

	render() {
		const { popout, activePanel, dataset } = this.state;
		const modal = (
			<ModalRoot
				activeModal={this.state.activeModal}
				onClose={() => this.setState({ activeModal: null })}>
				<ModalCard
					id={'modal'}
					onClose={() => this.setState({ activeModal: null })}
					icon={<Icon56FireOutline />}
					header="О приложении"
					caption={<span>Приложение позволяет контролировать время, прошедшее с момента последнего употребления алкоголя. Подробнее в <Link href="https://vk.com/club194999601" target="_blank">группе</Link></span>}
				>
				</ModalCard>
			</ModalRoot>
		);

		return (
			<View activePanel={activePanel} popout={popout} modal={modal}>
				<Settings id='settings' go={this.go.bind(this)} dataset={dataset} />
				<Main id='main' go={this.go.bind(this)} dataset={dataset} modal={this.modal.bind(this)} />
				<Organism id='organism' go={this.go.bind(this)} dataset={dataset} />
			</View>
		);
	}
}

