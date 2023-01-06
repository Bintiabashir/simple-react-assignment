import React from 'react';

const QuestionAnswer = () => {
    return (
        <div className='text-center bg-white md:bg-base-100'>

            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="md:drawer-content hidden md:block">
                <label htmlFor="my-drawer" className="btn  btn-primary drawer-button m-5 ">Question-Answers</label>
            </div>

            <div className="md:drawer-side drawer-content">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <div className="menu p-4 bg-white md:bg-base-100 text-base-content">

                    <div tabIndex={0} className="collapse group collapse-arrow border border-base-300 rounded-box mt-7 mb-5 ">
                        <div className="collapse-title 
                             group-focus:bg-error group-focus:text-error-content bg-secondary text-secondary-content
                             text-lg font-semibold">
                            Question 1: What is the difference between props and state?
                        </div>

                        <div className="collapse-content bg-secondary text-secondary-content  group-focus:bg-error group-focus:text-error-content">
                            <p><span className='font-medium text-medium'>Answer:</span> The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.Furthermore,props are immutable  where states are mutable.states are used for rendering dynamic changes within component.props are mostly used to communicate between components.You can pass from parent to child directly. For passing from child to parent you need use concept of lifting up states.</p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse group collapse-arrow border border-base-300 rounded-box my-5">
                        <div className="collapse-title group-focus:bg-secondary group-focus:text-secondary-content  bg-error text-error-content text-lg font-semibold">

                            Question 2:  How does React work?
                        </div>

                        <div className="collapse-content group-focus:bg-secondary group-focus:text-secondary-content  bg-error text-error-content">
                            <p><span className='font-medium text-medium'>Answer:</span>  JSX is a JavaScript extension that allows us to describe React's object tree using a syntax that resembles that of an HTML template.React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM.
                                <br />
                                So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
                        </div>
                    </div>



                    <div tabIndex={0} className="collapse group collapse-arrow border border-base-300 rounded-box my-5">
                        <div className="collapse-title bg-secondary text-secondary-content  group-focus:bg-error group-focus:text-error-content text-lg font-semibold">
                            Question 3:  What is the use of useEffect hook?
                        </div>

                        <div className="collapse-content bg-secondary text-secondary-content  group-focus:bg-error group-focus:text-error-content">
                            <p><span className='font-medium text-medium'>Answer:</span>  useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in.The useEffect Hook allows us to perform side effects in our components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default QuestionAnswer;