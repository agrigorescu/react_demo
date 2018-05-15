import React from 'react'

// TODO 2:
// Transform this into a React component
// const Title = ({name}) => {
//   return React.createElement('h1', null, `Hello, my name is ${name}`)
// }

class Title extends React.Component{
  render(){
      return <h1>Hello, my name is {this.props.name}</h1>
  } 
}

// TODO 3:
// Transform this into a React component
// const Container = ({children}) => {
//   return React.createElement(
//     'div',
//     {
//       style: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh'
//       }
//     },
//     children
//   )
// }

const Container = ({children}) => {
  const styles = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
          }
  return (
  <div style={styles}>
    {children}
  </div>)
}

// TODO 1
// Transform this into a React component
// const Math = () => {
//   return React.createElement('h2', null, 2 + 2)
// }

class  Math extends React.Component {
  render(){
    return <h2>{2+2}</h2>
  }
}


// TODO 4:
// Transform this into a React Component
export const App = () => {
  return (
    <Container>
      <Title name="Some name"/>
      <Math/>
    </Container>
  )
  // return React.createElement(Container, null, [
  //   React.createElement(Title, {key: 'title', name: 'Antonio'}),
  //   React.createElement(Math, {key: 'math'})
  // ])
}

