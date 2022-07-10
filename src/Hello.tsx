import React, {FC} from 'react';
import './Hello.pcss';

type Props = {};

export const Hello: FC<Props> = ({}) => {
    return <div className={'Hello'}>
        <h1>Hello React</h1>
        <div className={'text-red-500'}>text-red-500</div>
        <div className="high-specificity">
            <div className="nested">
                <div className="selector text-red-500">Will be red-500</div>
            </div>
        </div>

        <div className="text-red-500" style={{color: 'yellow'}}>Will be yellow</div>
    </div>;
}
