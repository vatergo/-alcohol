import React, { Component } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import Progress from '@vkontakte/vkui/dist/components/Progress/Progress';
import SimpleCell from '@vkontakte/vkui/dist/components/SimpleCell/SimpleCell';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Icon24Done from '@vkontakte/icons/dist/24/done';

import './Organism.css';

export default class Organism extends Component {
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

    render() {
        const { id, go } = this.props;
        const { dataset } = this.state;
        const days = dataset ? Math.ceil(Math.abs((new Date()).getTime() - new Date(dataset[1]).getTime()) / (1000 * 3600 * 24)) : 0;
        return (<>
            <Panel id={id}>
                <PanelHeader
                    addon={<PanelHeaderButton onClick={(e) => go('main')}>Назад</PanelHeaderButton>}
                    left={<PanelHeaderBack onClick={(e) => go('main')} />}>
                    Организм
                    </PanelHeader>
                <Group separator="show" style={{ margin: '10px 0', position: 'relative' }}>
                    <Div>
                        <SimpleCell multiline after={days >= 1 && <Icon24Done />}>
                            <InfoRow header="1 день">
                                Тошнота, головокружения, головная боль, тремор рук, повышенная температура тела, перепады настроения<br />
                                {days < 1 && `${Math.round(days / 1 * 100)}%`}
                                {days < 1 && <Progress className='progress' value={days < 1 ? days / 1 * 100 : 100} />}
                            </InfoRow>
                        </SimpleCell>
                        <Separator style={{ margin: '12px 0' }} />
                        <SimpleCell multiline after={days >= 2 && <Icon24Done />}>
                            <InfoRow header="2 дня">
                                Начинается процесс детоксикации – выведение продуктов распада этилового спирта<br />
                                {days < 2 && `${Math.round(days / 2 * 100)}%`}
                                {days < 2 && <Progress className='progress' value={days < 2 ? days / 2 * 100 : 100} />}
                            </InfoRow>
                        </SimpleCell>
                        <Separator style={{ margin: '12px 0' }} />
                        <SimpleCell multiline after={days >= 3 && <Icon24Done />}>
                            <InfoRow header="3 дня">
                                Улучшение физического самочувствия<br />
                                {days < 3 && `${Math.round(days / 3 * 100)}%`}
                                {days < 3 && <Progress className='progress' value={days < 3 ? days / 3 * 100 : 100} />}
                            </InfoRow>
                        </SimpleCell>
                        <Separator style={{ margin: '12px 0' }} />
                        <SimpleCell multiline after={days >= 5 && <Icon24Done />}>
                            <InfoRow header="5 дней">
                                Практически полностью отступает абстинентный синдром<br />
                                {days < 5 && `${Math.round(days / 5 * 100)}%`}
                                {days < 5 && <Progress className='progress' value={days < 5 ? days / 5 * 100 : 100} />}
                            </InfoRow>
                        </SimpleCell>
                        <Separator style={{ margin: '12px 0' }} />
                        <SimpleCell multiline after={days >= 8 && <Icon24Done />}>
                            <InfoRow header="8 дней">
                                Полностью проходит абстинентный синдром, значительно улучшается психологическое состояние, улучшение оттенка кожи, нормализуется работа ЖКТ<br />
                                {days < 8 && `${Math.round(days / 8 * 100)}%`}
                                {days < 8 && <Progress className='progress' value={days < 8 ? days / 8 * 100 : 100} />}
                            </InfoRow>
                        </SimpleCell>
                        <Separator style={{ margin: '12px 0' }} />
                        <SimpleCell multiline after={days >= 14 && <Icon24Done />}>
                            <InfoRow header="2 недели">
                                Восстановление мыслительных процессов, приход в норму показателей сердечного ритма и давления, исчезает одышка и восстанавливается дыхание<br />
                                {days < 14 && `${Math.round(days / 14 * 100)}%`}
                                {days < 14 && <Progress className='progress' value={days < 14 ? days / 14 * 100 : 100} />}
                            </InfoRow>
                        </SimpleCell>
                        <Separator style={{ margin: '12px 0' }} />
                        <SimpleCell multiline after={days >= 30 && <Icon24Done />}>
                            <InfoRow header="1 месяц">
                                Полный вывод продуктов распада этилового спирта, белеют зубы<br />
                                {days < 30 && `${Math.round(days / 30 * 100)}%`}
                                {days < 30 && <Progress className='progress' value={days < 30 ? days / 30 * 100 : 100} />}
                            </InfoRow>
                        </SimpleCell>
                        <Separator style={{ margin: '12px 0' }} />
                        <SimpleCell multiline after={days >= 92 && <Icon24Done />}>
                            <InfoRow header="3 месяца">
                                Восстановление иммунитета, человек здоров и энергичен<br />
                                {days < 92 && `${Math.round(days / 92 * 100)}%`}
                                {days < 92 && <Progress className='progress' value={days < 92 ? days / 92 * 100 : 100} />}
                            </InfoRow>
                        </SimpleCell>
                        <Separator style={{ margin: '12px 0' }} />
                        <SimpleCell multiline after={days >= 183 && <Icon24Done />}>
                            <InfoRow header="6 месяцев">
                                Восстановление нравственных черт, возрождается способность нести ответсвенность за свое поведение<br />
                                {days < 183 && `${Math.round(days / 183 * 100)}%`}
                                {days < 183 && <Progress className='progress' value={days < 183 ? days / 183 * 100 : 100} />}
                            </InfoRow>
                        </SimpleCell>
                        <Separator style={{ margin: '12px 0' }} />
                        <SimpleCell multiline after={days >= 365 && <Icon24Done />}>
                            <InfoRow header="1 год">
                                Нормализация функционирования печени, поджелудочной, почек, нервной системы, улучшение психического состояния<br />
                                {days < 365 && `${Math.round(days / 365 * 100)}%`}
                                {days < 365 && <Progress className='progress' value={days < 365 ? days / 365 * 100 : 100} />}
                            </InfoRow>
                        </SimpleCell>
                        <Separator style={{ margin: '12px 0' }} />
                    </Div>
                </Group >
            </Panel>
        </>);
    }
}