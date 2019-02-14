/**
 * api接口统一管理
 **/
import axios from './http';


/**
 * 获取首页帖子列表数据
 */
export const getTopics = data => {
  return axios({
    url: '/topics',
    method: 'get',
    params: data
  });
};


/**
 * 获取帖子详情数据
 */
export const getTopicById = id => {
  return axios({
    url: `/topic/${id}`,
    method: 'get'
  });
};


/**
 * 获取用户详情数据
 */
export const getUserByName = loginname => {
  return axios({
    url: `/user/${loginname}`,
    method: 'get'
  });
};
