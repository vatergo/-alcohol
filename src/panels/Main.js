import React, { Component } from 'react';
import bridge from '@vkontakte/vk-bridge';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import List from '@vkontakte/vkui/dist/components/List/List';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Icon28LogoVkOutline from '@vkontakte/icons/dist/28/logo_vk_outline';
import Icon28FireOutline from '@vkontakte/icons/dist/28/fire_outline';
import Link from '@vkontakte/vkui/dist/components/Link/Link';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28SmileOutline from '@vkontakte/icons/dist/28/smile_outline';
import Icon28AdvertisingOutline from '@vkontakte/icons/dist/28/advertising_outline';

import './Main.css';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataset: props.dataset,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.dataset !== this.props.dataset) {
            this.setState({
                dataset: this.props.dataset,
            });
        }
    }

    postWall(days) {
        bridge.send("VKWebAppShowStoryBox",
            {
                "background_type": "none",
                "stickers": [
                    {
                        "sticker_type": "renderable",
                        "sticker": {
                            "can_delete": 0,
                            "content_type": "image",
                            "url": "https://sun9-28.userapi.com/c853424/v853424330/22d20a/8TtkTyyJRrA.jpg",
                            "clickable_zones": [
                                {
                                    "action_type": "link",
                                    "action": {
                                        "link": "https://vk.com/app7420479",
                                        "tooltip_text_key": "tooltip_open_default"
                                    },
                                    "clickable_area": [
                                        {
                                            "x": 0,
                                            "y": 0
                                        },
                                        {
                                            "x": 269,
                                            "y": 0
                                        },
                                        {
                                            "x": 269,
                                            "y": 151
                                        },
                                        {
                                            "x": 0,
                                            "y": 151
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            });
    }

    render() {
        const { id, go, modal } = this.props;
        const { dataset } = this.state;

        const days = dataset ? Math.ceil(Math.abs((new Date()).getTime() - new Date(dataset[1]).getTime()) / (1000 * 3600 * 24)) : 0;
        const litres = dataset ? ((+dataset[2] + +dataset[3] + +dataset[4]) / 7 * days).toFixed(1) : 0;
        const moneys = dataset ? (((+dataset[2] * +dataset[5] + +dataset[3] * +dataset[6] + +dataset[4] * +dataset[7]) / 7 * days).toFixed(1)) : 0;
        const spirt = dataset ? (((+dataset[2] * 0.09 + +dataset[3] * 0.2 + +dataset[4] * 0.4) / 7 * days).toFixed(1)) : 0;

        const caseDay = getDayAddition(days);

        return (
            <Panel id={id}>
                <PanelHeader>Бросай алкоголь!</PanelHeader>
                <Group separator="show" style={{ margin: '10px 0', position: 'relative' }}>
                    <Div>
                        <div className='stat'>
                            <div className='cell'>
                                <span className='name'>Не выпито<br />алкоголя</span>
                                <span className='value'>{Number.isNaN(+litres) ? 0 : litres}</span>
                                <span className='ext'>л.</span>
                            </div>
                            <div className='cell'>
                                <span className='name'>Без алкоголя<br />уже</span>
                                <span className='value'>{Number.isNaN(+days) ? 0 : days}</span>
                                <span className='ext'>{caseDay}</span>
                            </div>
                            <div className='cell'>
                                <span className='name'>Сэкономлено<br />денег</span>
                                <span className='value'>{Number.isNaN(+moneys) ? 0 : moneys}</span>
                                <span className='ext'>руб.</span>
                            </div>
                            <div className='cell'>
                                <span className='name'>Сэкономлено<br />времени</span>
                                <span className='value'>{Number.isNaN(+litres) ? 0 : litres * 0.5}</span>
                                <span className='ext'>ч.</span>
                            </div>
                            <div className='cell'>
                                <span className='name'>Не получено<br />спирта</span>
                                <span className='value'>{Number.isNaN(+spirt) ? 0 : spirt}</span>
                                <span className='ext'>л.</span>
                            </div>
                        </div>
                    </Div>
                </Group>
                <Group separator="show" style={{ margin: '10px 0', position: 'relative' }}>
                    <List>
                        <Cell expandable before={<Icon28SettingsOutline />} onClick={(e) => go('settings')}>Настройки</Cell>
                        <Cell expandable before={<Icon28AdvertisingOutline />} onClick={this.postWall.bind(this, days)}>Поделиться в историю</Cell>
                        <Cell expandable before={<Icon28SmileOutline />} onClick={(e) => go('organism')}>Организм</Cell>
                        <Link href="https://vk.com/club194999601" target="_blank"><Cell className='cellLink' expandable before={<Icon28FireOutline />}>Мотивация</Cell></Link>
                        <Cell expandable before={<Icon28LogoVkOutline />} onClick={(e) => modal('modal')}>О приложении</Cell>
                        {/*<Cell expandable before={<Icon28FireOutline />}>Здесь потом будет что-нибудь ещё</Cell>*/}
                    </List>
                </Group>
            </Panel >
        );
    }
}


function getDayAddition(num) {
    let preLastDigit = num % 100 / 10;
    if (preLastDigit === 1) {
        return "дней";
    }
    switch (num % 10) {
        case 1:
            return "день";
        case 2:
        case 3:
        case 4:
            return "дня";
        default:
            return "дней";
    }
}