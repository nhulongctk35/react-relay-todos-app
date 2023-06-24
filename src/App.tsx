import { Suspense, useEffect, useState } from 'react'
import './App.css'
import { graphql } from 'relay-runtime'
import { PreloadedQuery, useFragment, usePreloadedQuery, useQueryLoader } from 'react-relay'
import { AppQuery as AppQueryType } from './__generated__/AppQuery.graphql'
import { AppTodoFragment$key } from './__generated__/AppTodoFragment.graphql'
import { AppTodoListFragment$key } from './__generated__/AppTodoListFragment.graphql'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import "todomvc-app-css/index.css";



const AppQuery = graphql`
  query AppQuery {
    user(id: "me")
    @required(action: THROW) {
      id
      userId
      ...TodoList_user
    }
  }
`

function TodoApp({appQueryRef}: {appQueryRef: PreloadedQuery<AppQueryType>}) {
  const { user} = usePreloadedQuery(AppQuery, appQueryRef)

  return (
    <div className='todoapp'>
      <TodoList userRef={user} />
    </div>
  )
}


function App() {
  const [appQueryReference, loadQuery ] = useQueryLoader<AppQueryType>(AppQuery)

  useEffect(() => {
    loadQuery({})
  }, [loadQuery])


  return (
    <>
     {appQueryReference !=null && <TodoApp appQueryRef={appQueryReference} /> }
    </>
  )
}

export default App
