import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
const getRepos = graphql`{
    github {
        viewer {
        repositories(
            first: 8
            orderBy: { field: STARGAZERS, direction: DESC }
            ) {
        edges {
            node {
            id
            name
            url
            description
            stargazers {
                totalCount
            }
            forkCount
        }
    }
    }
}
}
}`


export const Repostories = () => {
    
return( <StaticQuery query={getRepos} render={data=>{
    {console.log(data)}
    return (<div className="repo-container">
        {data.github.viewer.repositories.edges.map((item,index)=>(
            <div key={item.node.id} className="single-item">
                <div className="name">{item.node.name}</div>
                <div className="description">{item.node.description}</div>
                <div className="stars">Stars: {item.node.stargazers.totalCount}</div>
                <a href={item.node.url}className="go-repo">Click to go repo
                <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40" style={{verticalAlign: "middle"}}><g><path d="m20 6.6l13.4 13.4-13.4 13.4-2.3-2.4 9.3-9.4h-20.4v-3.2h20.4l-9.3-9.4z"></path></g></svg>
                </a>
            </div>
        ))}
    </div>)
}}
    />
)

}
