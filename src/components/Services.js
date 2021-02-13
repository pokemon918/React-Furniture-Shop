import React, { Component } from 'react'

import Title from './Title'

export default class Services extends Component {
    render() {
        return (
            <section className="services">
                <Title title={this.props.title} />
                <div className="services-center">
                    {this.props.services.map((item, index) => (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            {item.info}
                        </article>
                    ))}
                </div>
            </section>
        )
    }
}
