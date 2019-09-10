import React, { Component } from 'react'
import {Pagination,Carousel } from "antd"
import "antd/dist/antd.css"
import "./style.css"

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 分页器 */}
        {/* <Pagination defaultCurrent={5} total={50} />, mountNode */}
        {/* 轮播图 */}
        <Carousel autoplay>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>
      </div>
    )
  }
}
