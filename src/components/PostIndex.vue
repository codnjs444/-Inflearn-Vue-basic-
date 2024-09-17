  <template>
    <main>
      <div class="container py-4">
        <PostCreate @create-post="createPost"></PostCreate>
        <v-spacer class="my-4"></v-spacer>
        <div class="row g-3">
          <div v-for="items in posts" :key="items.id" class="col col-4" >
            <PostItem 
              :title= "items.title" 
              :contents="items.contents" 
              :type = "items.type"
              :is-like = "items.isLike"
              @toggle-like="items.isLike = !items.isLike">
            </PostItem>
            <!-- <v-btn @click="changeLikeValue(items)">toggle</v-btn> -->
          </div>
        </div>
        <hr class="my-4"/>
        <labelInput v-model="username" label="이름"></labelInput>
        <labelTitle v-model:title="username" label="제목"></labelTitle>
        <Username 
          v-model:firstname="firstname" 
          v-model:lastname="lastname">
        </Username>
      </div>
    </main>
  </template>

  <script setup>
  import PostItem from './PostItem.vue'
  import PostCreate from './PostCreate.vue'
  import labelInput from './LabelInput.vue'
  import labelTitle from './LabeTitle.vue'
  import Username from './Username.vue'


  import { reactive, ref } from 'vue'

  const post = reactive({
    title: '제목 2',
    contents: '내용 2'
  })

  const posts = reactive([
    { id: 1, title: '제목 1', contents: '내용 1', isLike: true, type: 'news'},
    { id: 2, title: '제목 2', contents: '내용 2', isLike: false, type: 'news'},
    { id: 3, title: '제목 3', contents: '내용 3', isLike: true, type: 'notice'},
    { id: 4, title: '제목 4', contents: '내용 4', isLike: false, type: 'news'},
    { id: 5, title: '제목 5', contents: '내용 5', isLike: true, type: 'notice'},
    { id: 6, title: '제목 6', contents: '내용 6', isLike: true, type: 'news'},
  ])

  const changeLikeValue = (item) => {
    item.isLike = !item.isLike;
    console.log('실행 ', item.title, '의 isLike가 변경되었습니다.');
  }

  const createPost = (newPost) => {
    console.log('newPost:',newPost)
    posts.push(newPost)
  }

  const username = ref('')
  const firstname = ref('')
  const lastname = ref('')
  </script>

  <style lang="scss" scoped>

  </style>