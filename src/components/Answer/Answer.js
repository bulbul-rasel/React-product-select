import React from 'react';

const Answer = () => {
    return (
        <div>
            <h3>Q1. How Works React?</h3>
            <p> React.js is JavaScript library and it generally thought of as the view in an application. React is a single page application. So, it works with virtual DOM. React basically maintain like a tree with some leaf like nodes. React allows re-construct DOM with help of virtual DOM. React use JSX which convert HTML to JavaScript object.</p>

            <h3>Q2. Props vs State</h3>
            <p>There are so many difference between Props and state is React, Some are given below-</p>
            <p> <strong>Props:</strong> Props are read-only and immutable. Props are allow to pass data as an argument from one component to another components. Props are used to communicate between components and make components reusable.</p>
            <p> <strong> State:</strong> State changes can be asynchronous and this is mutable.  State works for hold data about the components. States used for rendering dynamic changes with components and can not make reusable.</p>
        </div>
    );
};

export default Answer;