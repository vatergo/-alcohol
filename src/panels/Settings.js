import React, { Component } from 'react';
import bridge from '@vkontakte/vk-bridge';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startYears: props.dataset ? props.dataset[0] : '',
            dateNotDrink: props.dataset ? props.dataset[1] : new Date().toISOString().split('T')[0],
            liters9percent: props.dataset ? props.dataset[2] : '',
            liters20percent: props.dataset ? props.dataset[3] : '',
            liters35percent: props.dataset ? props.dataset[4] : '',
            cost9percent: props.dataset ? props.dataset[5] : '',
            cost20percent: props.dataset ? props.dataset[6] : '',
            cost35percent: props.dataset ? props.dataset[7] : '',
        };
    }

    onClick(e) {
        bridge.send("VKWebAppStorageSet", {
            "key": "info",
            "value": `${this.state.startYears},${this.state.dateNotDrink},${this.state.liters9percent},${this.state.liters20percent},${this.state.liters35percent},${this.state.cost9percent},${this.state.cost20percent},${this.state.cost35percent}`
        }).then(() => this.props.go('main'));
    }

    render() {
        const { id, go } = this.props;
        const {
            startYears, dateNotDrink,
            liters9percent, liters20percent, liters35percent,
            cost9percent, cost20percent, cost35percent,
        } = this.state;
        return (
            <Panel id={id}>
                <PanelHeader
                    addon={<PanelHeaderButton onClick={(e) => go('main')}>Назад</PanelHeaderButton>}
                    left={<PanelHeaderBack onClick={(e) => go('main')} />}>
                    Настройки
                </PanelHeader>
                <FormLayout>
                    <Input
                        top="Во сколько лет начали пить?"
                        type='number'
                        value={startYears}
                        onChange={({ target }) => this.setState({ startYears: target.value })}
                    />
                    <Input
                        top="С какого дня не пьете?"
                        type='date'
                        value={dateNotDrink}
                        onChange={({ target }) => {
                            const date = new Date().toISOString().split('T')[0];
                            console.log(target.value, date)
                            if (date < target.value)
                                this.setState({ dateNotDrink: date });
                            else this.setState({ dateNotDrink: target.value });
                        }}
                    />
                    <Input
                        top="Сколько примерно в неделю выпиваете пивных напитков до 9%-алк в литрах?"
                        type='number'
                        value={liters9percent}
                        onChange={({ target }) => this.setState({ liters9percent: target.value })}
                    />
                    <Input
                        top="Сколько примерно в неделю выпиваете винных напитков и ликеров до 20%-алк в литрах?"
                        type='number'
                        value={liters20percent}
                        onChange={({ target }) => this.setState({ liters20percent: target.value })}
                    />
                    <Input
                        top="Сколько примерно в неделю выпиваете крепкого алкоголя более 35%-алк в литрах?"
                        type='number'
                        value={liters35percent}
                        onChange={({ target }) => this.setState({ liters35percent: target.value })}
                    />
                    <Input
                        top="Примерная стоимость 1 литра алкоголя до 9%-алк?"
                        type='number'
                        value={cost9percent}
                        onChange={({ target }) => this.setState({ cost9percent: target.value })}
                    />
                    <Input
                        top="Примерная стоимость 1 литра алкоголя до 20%-алк?"
                        type='number'
                        value={cost20percent}
                        onChange={({ target }) => this.setState({ cost20percent: target.value })}
                    />
                    <Input
                        top="Примерная стоимость 1 литра крепкого алкоголя?"
                        type='number'
                        value={cost35percent}
                        onChange={({ target }) => this.setState({ cost35percent: target.value })}
                    />
                    <Button size="xl" onClick={this.onClick.bind(this)}>Сохранить</Button>
                </FormLayout>
            </Panel>
        );
    }
}
