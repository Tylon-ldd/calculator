import React from 'react';
import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../Button/Button';

const keypad = (props) => {
    const keypadItems = [[
        {
            text: 'C',
            onButtonPress: props.onButtonPress
        },
        {
            text: '←',
            onButtonPress: props.onButtonPress
        },
        {
            text: '%',
            onButtonPress: props.onButtonPress
        },
        {
            text: '/',
            onButtonPress: props.onButtonPress
        }
    ],
    [
        {
            text: '9',
            onButtonPress: props.onButtonPress
        },
        {
            text: '8',
            onButtonPress: props.onButtonPress
        },
        {
            text: '7',
            onButtonPress: props.onButtonPress
        },
        {
            text: '*',
            onButtonPress: props.onButtonPress
        }
    ],
    [
        {
            text: '6',
            onButtonPress: props.onButtonPress
        },
        {
            text: '5',
            onButtonPress: props.onButtonPress
        },
        {
            text: '4',
            onButtonPress: props.onButtonPress
        },
        {
            text: '-',
            onButtonPress: props.onButtonPress
        }
    ],
    [
        {
            text: '3',
            onButtonPress: props.onButtonPress
        },
        {
            text: '2',
            onButtonPress: props.onButtonPress
        },
        {
            text: '1',
            onButtonPress: props.onButtonPress
        },
        {
            text: '+',
            onButtonPress: props.onButtonPress
        }
    ],
    [
        {
            text: '0',
            onButtonPress: props.onButtonPress
        },
        {
            text: '.',
            onButtonPress: props.onButtonPress
        },
        {
            type: 'large',
            text: '=',
            onButtonPress: props.onButtonPress
        }
    ]];

    return (
        // 2D array v 1.0
        <section className="keypad">
            {keypadItems.map(row => (
                <KeypadRow>
                    {row.map(item => (
                        <Button
                            type={item.type}
                            key={item.text}
                            onButtonPress={item.onButtonPress || props.onButtonPress}
                        >
                            {item.text}
                        </Button>
                    ))}
                </KeypadRow>
            ))}
        </section>
    );

    // return (
    //     // 2D array v 1.0
    //     <section className="keypad">
    //         <KeypadRow>
    //             {keypadItems[0].map(item => (
    //                 <Button 
    //                     key={item.text}
    //                     onButtonPress={item.onButtonPress || props.onButtonPress}
    //                 >
    //                     {item.text}
    //                 </Button>
    //             ))}
    //         </KeypadRow>
    //         <KeypadRow>
    //             {keypadItems[1].map(item => (
    //                 <Button 
    //                     key={item.text}
    //                     onButtonPress={item.onButtonPress || props.onButtonPress}
    //                 >
    //                     {item.text}
    //                 </Button>
    //             ))}
    //         </KeypadRow>
    //         <KeypadRow>
    //             {keypadItems[2].map(item => (
    //                 <Button 
    //                     key={item.text}
    //                     onButtonPress={item.onButtonPress || props.onButtonPress}
    //                 >
    //                     {item.text}
    //                 </Button>
    //             ))}
    //         </KeypadRow>
    //         <KeypadRow>
    //             {keypadItems[3].map(item => (
    //                 <Button 
    //                     key={item.text}
    //                     onButtonPress={item.onButtonPress || props.onButtonPress}
    //                 >
    //                     {item.text}
    //                 </Button>
    //             ))}
    //         </KeypadRow>
    //         <KeypadRow>
    //             {keypadItems[4].map(item => (
    //                 <Button 
    //                     type={item.type}
    //                     key={item.text}
    //                     onButtonPress={item.onButtonPress || props.onButtonPress}
    //                 >
    //                     {item.text}
    //                 </Button>
    //             ))}
    //         </KeypadRow>
    //     </section>
    // );

//   <section className="keypad">
//     <KeypadRow>
//         <Button onButtonPress={props.onButtonPress}>C</Button>
//         <Button onButtonPress={props.onButtonPress}>&larr;</Button>
//         <Button onButtonPress={props.onButtonPress}>%</Button>
//         <Button onButtonPress={props.onButtonPress}>/</Button>
//     </KeypadRow>
//     <KeypadRow>
//         <Button onButtonPress={props.onButtonPress}>9</Button>
//         <Button onButtonPress={props.onButtonPress}>8</Button>
//         <Button onButtonPress={props.onButtonPress}>7</Button>
//         <Button onButtonPress={props.onButtonPress}>*</Button>
//     </KeypadRow>
//     <KeypadRow>
//         <Button onButtonPress={props.onButtonPress}>6</Button>
//         <Button onButtonPress={props.onButtonPress}>5</Button>
//         <Button onButtonPress={props.onButtonPress}>4</Button>
//         <Button onButtonPress={props.onButtonPress}>-</Button>
//     </KeypadRow>
//     <KeypadRow>
//         <Button onButtonPress={props.onButtonPress}>3</Button>
//         <Button onButtonPress={props.onButtonPress}>2</Button>
//         <Button onButtonPress={props.onButtonPress}>1</Button>
//         <Button onButtonPress={props.onButtonPress}>+</Button>
//     </KeypadRow>
//     <KeypadRow>
//         <Button onButtonPress={props.onButtonPress}>0</Button>
//         <Button onButtonPress={props.onButtonPress}>.</Button>
//         <Button type="large" onButtonPress={props.onButtonPress}>=</Button>
//     </KeypadRow>
//   </section>
};

export default keypad;