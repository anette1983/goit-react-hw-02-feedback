import { Component } from "react";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";


class Feedback extends Component {

    // static propTypes = {

    // }

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

    onLeaveFeedback = (evt) => {
        // const options = Object.keys(this.state);
        const currentFeedback = evt.target.textContent;
        this.setState(prevState => {
            return { [currentFeedback]: prevState[currentFeedback] + 1 };
        })
    }  

   

    // handleGoodClick = (event) => {
    //     console.log('click on Good :>> ');
    //     const target = event.target;
    //     this.setState(prevState => {
    //         return {
    //             good: prevState.good + 1,
    //         };
    //     });

    // };

    // handleNeutralClick = (event) => {
    //     console.log('click on Neutral :>> ');
    //     const target = event.target;
    //     this.setState(prevState => {
    //         return {
    //             neutral: prevState.neutral + 1,
    //         };
    //     });

    // }

    // handleBadClick = (event) => {
    //     console.log('click on Bad :>> ');
    //     const target = event.target;
    //     this.setState(prevState => {
    //         return {
    //             bad: prevState.bad + 1,
    //         };
    //     });

    // }

    countTotalFeedback = () => {
        const total = this.state.good + this.state.neutral + this.state.bad;
        return total;
    }
    countPositiveFeedbackPercentage = () => {
        console.log('this.state.good :>> ', this.state.good);
        console.log('this.countTotalFeedback :>> ', this.countTotalFeedback());

       return Math.round(this.state.good/this.countTotalFeedback()*100);
    //    return Math.round((100 * this.state.good) / this.countTotalFeedback());
    }
    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePersentage = this.countPositiveFeedbackPercentage();
        const  options = Object.keys(this.state);
        return (
            <section>
                <Section title="Please leave feedback!">
                <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
                </Section>
                <Section title="Statistics">
                <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePersentage}/>
                </Section>
                
            </section>
        )
    }
}

export default Feedback;