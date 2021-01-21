import React, {useState, useEffect} from 'react';
import { View } from "react-native";
import DetailedPost from '../../Components/DetailedPost';
import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify'
import {listTodos} from '../../graphql/queries'

const PostScreen = (props) => {
  const route = useRoute();

  const [post, setPost] = useState(null)

  // retrieve post from aws database using graphql
  useEffect(()=>{
      const fetchPost = async () => {
          try {
              const postResult = await API.graphql(
                graphqlOperation(listTodos, {
                  filter: {
                    id: {
                      eq: route.params.postId
                    }
                  }
                })
              )
              setPost(postResult.data.listTodos.items)
          } catch(error) {
              console.log(error)
          }
      }
      fetchPost();
  }, [])

  return (
    <View style={{backgroundColor: 'white'}}>
      {post ? <DetailedPost post={post} /> : null}
    </View>
  );
};

export default PostScreen;
