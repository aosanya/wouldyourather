import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import QuestionInfo from './QuestionInfo'
import QuestionRespond from './QuestionRespond'
import QuestionDisplay from './QuestionDisplay'
import ContentWrapper from './ContentWrapper'
import { formatQuestion }  from '../services/utils/helpers'

class Vote extends PureComponent {
  render() {
    const { allQuestions, loading } = this.props
    return (
      <ContentWrapper>
        {loading ? null
        :
        <div className="panel">
            <ul>
              {allQuestions.map((question) => (
                  <li key={question.id}>
                    <div className="panel roundedBorder">
                      { question.hasResponded
                        ? <Fragment><QuestionInfo question={question}/><QuestionDisplay formatedQuestion={question}/></Fragment>
                        : <QuestionRespond formatedQuestion={question}/>
                      }
                    </div>
                  </li>
                ))}
            </ul>
        </div>
        }
      </ContentWrapper>
    )
  }
}

function mapStateToProps ({ questions, users , authedUser, fetchingData }) {
  var allQuestions = undefined

  if (!fetchingData){
    //Formating
    allQuestions = Object.values(questions).map((a) => formatQuestion(a, users[a.author], authedUser))
    //Sorting
    allQuestions = allQuestions.sort((a,b) => b.timestamp - a.timestamp)
  }

  return {
    loading : fetchingData,
    allQuestions: allQuestions,
  }
}

export default connect(mapStateToProps)(Vote)