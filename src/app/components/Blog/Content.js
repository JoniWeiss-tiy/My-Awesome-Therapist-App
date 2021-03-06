import React, { Component } from 'react';

import moment from 'moment'

import { formatLongDate } from '../../helpers/date-helpers'

import ArticleContent from './ArticleContent';

export default class Content extends Component {
  render (props) {
    return(
      <div className="content-main">
        <h1>A Therapists' Blog</h1>
        {this.props.blog.map((entry, idx) => {
          return (<div key={idx}>
            <h3 className="entry-title">
              {entry.title}<br /><br />
            </h3>
            <p className="entry-article">
              {formatLongDate(entry.entryDate)}<br /><br />
            </p>
            <ArticleContent data={entry.article} />
            <p>Tags: {entry.tags.map((tag,idx) => {
                return <span key={idx}>[{tag}] </span>
              })}</p>
            <p>&nbsp;</p>
            <hr />
            <p>&nbsp;</p>
          </div>)
        })}
      </div>
    );
  }
}
