let taggle = [];
const PostEditor = React.createClass({
    getInitialState() {
        return {
            id: '',
            title:'',
            text: '',
            tags: [],
            modeEdit: true, // false
            showErrors: false
        }
    },
    componentDidMount() {
        taggle['editor'] = new Taggle('taggle', {tags:this.state.tags});
    },
    componentDidUpdate() {
        if (this.state.modeEdit)
        {
            if (taggle['editor'] == undefined)
                taggle['editor'] = new Taggle('taggle', {tags:this.state.tags});
        }
    },
    handleTitleChange(event){
        this.setState({
            title: event.target.value
        });
    },
    handleTextChange(event){
        this.setState({
            text: event.target.value
        });
    },
    changeMode(event){
        event.preventDefault();
        const newModeEdit = !this.state.modeEdit;
        this.setState({
            modeEdit: newModeEdit
        });

        if (!newModeEdit) {
            const tagsInputs = this.tagsContainer.querySelectorAll('[name="taggles[]"]');
            const tagsArr = arr => Array.from(arr).map(el=>el.value);
            this.setState({
                tags: tagsArr(tagsInputs)
            });
        }
        else
        {
            taggle['editor'] = undefined;
        }
    },
    handlePostAdd(e){
        e.preventDefault();
        const tagsInputs = this.tagsContainer.querySelectorAll('[name="taggles[]"]');
        const tagsArr = arr => Array.from(arr).map(el=>el.value);

        if (this.state.title && this.state.text)
        {
            const newPost = {
                title: this.state.title,
                text: this.state.text,
                tags: tagsArr(tagsInputs),
                id: Date.now()
            };
            this.props.onPostAdd(newPost);
            this.resetState();
        }
        else {
            this.setState({
                showErrors: false
            });
        }
        return false;
    },
    resetState() {
        this.setState({
            title:'',
            text: '',
            tags: [],
            id: '',
            modeEdit: true,
            showErrors: false
        });

        taggle['editor'].removeAll();
    },
    render(){
        return (
            <div id="postEditor" className="collapse">
                {this.state.title && this.state.text &&
                    <a href="#" className="pull-right btn btn-default" onClick={this.changeMode}>Предпросмотр</a>
                }
                {
                    this.state.modeEdit &&
                    <div>
                        <h2>Напишите пост</h2>
                        <form>
                          <div className="form-group">
                            <input className="form-control" type="text" name="title" placeholder="Название поста" onChange={this.handleTitleChange} value={this.state.title} />
                            {this.state.showErrors && !this.state.title.length &&
                                <label htmlFor="title">Поле заголовок обязательное</label>
                            }
                          </div>
                          <div className="form-group">
                              <textarea className="form-control" name="text" id="" cols="30" rows="10" placeholder="Ваш текст здесь..." onChange={this.handleTextChange} value={this.state.text}></textarea>
                          </div>
                          <div className="form-group">
                             <div id="taggle" className="input textarea clearfix custom stackoverflow"  ref={c => this.tagsContainer = c} />
                          </div>
                        </form>
                        <button type="submit" className="btn btn-default" onClick={this.handlePostAdd}>Опубликовать</button>
                    </div>
                }
                {
                    !this.state.modeEdit &&
                    <div>
                        <h2>Так пост будет выглядеть</h2>
                        <ul className="postlist list-unstyled">
                        <Post
                            key={this.state.id}
                            id={this.state.id}
                            title={this.state.title}
                            text={this.state.text}
                            tags={this.state.tags}
                        />
                        </ul>
                    </div>
                }

            </div>
        )
    }
})

const Tag = React.createClass({
    handleFilterByTag(){
        this.props.onTagSearch(this.props.title);
    },
    render(){
        const {
            title,
            count,
            onTagSearch,
            isCurrent
        } = this.props;
        return (
            <li>
                {isCurrent
                ?
                    <strong>{title}
                        {count &&
                            <sup><small>{count}</small></sup>
                        }
                    </strong>
                :
                    <a href="#" onClick={this.handleFilterByTag}>{title}
                    {count &&
                        <sup><small>{count}</small></sup>
                    }
                    </a>
                }
            </li>
        )
    }
})

const Tags = React.createClass({
    onTagSearch(tagId) {
        this.props.onTagSearch(tagId);
    },
    render(){
        const {
            tags,
            onTagSearch
        } = this.props;
        return (
            <div>Теги:&nbsp;
                <ul className="tags list-unstyled list-inline">{
                        tags.map(tag =>
                            <Tag
                                key={tag}
                                title={tag}
                                onTagSearch={this.onTagSearch}
                            />
                        )
                    }
                </ul>
            </div>
        )
    }
})

const Post = React.createClass({
    getInitialState() {
        return {
            modeEdit: false,
            id: '',
            title: '',
            text:'',
            isOpen: false,
            tags: []
        };
    },
    componentDidMount() {
        const posttext = this.posttext;
        const remarkableText = md.render(posttext.innerHTML);
        posttext.innerHTML = remarkableText;
    },
    handleDelete() {
        console.log(this.props.id);
        this.props.onDelete(this.props.id);
    },
    changeMode(event){
        event.preventDefault();
        const newEditMode = !this.state.modeEdit;
        if (newEditMode)
        {
            this.setState({
                modeEdit: newEditMode,
                id: this.props.id,
                title: this.props.title,
                text: this.props.text,
                tags: this.props.tags
            });
            taggle['editor'].removeAll();
        }  else {
            this.setState({
                modeEdit: newEditMode
            });
        }
    },
    handlePostAdd(e){
        e.preventDefault();
        const tagsInputs = this.tagsContainer.querySelectorAll('[name="taggles[]"]')
        const tagsArr = arr => Array.from(arr).map(el=>el.value);

        if (this.state.title && this.state.text)
        {
            const editedPost = {
                title: this.state.title,
                text: this.state.text,
                tags: tagsArr(tagsInputs),
                id: this.state.id
            };
            this.props.onPostEdit(editedPost);
            this.setState({
                modeEdit: false,
                id: '',
                title: '',
                text:'',
                isOpen: false,
                tags: []
            })
        }
        else {
        }
    },
    componentDidUpdate() {
        if (this.state.modeEdit)
        {
            if (taggle['post-'+this.props.id] == undefined)
                taggle['post-'+this.props.id] = new Taggle('taggle-'+this.props.id, {tags:this.props.tags});
        }

        if (!this.state.modeEdit)
        {
            const posttext = this.posttext;
            const remarkableText = md.render(this.props.text);
            posttext.innerHTML = remarkableText;
        }
    },
    handleTitleChange(event){
        this.setState({
            title: event.target.value
        });
    },
    handleTextChange(event){
        this.setState({
            text: event.target.value
        });
    },
    changeOpen(event){
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    },
    render(){
        const {
            id,
            title,
            text,
            tags,
            onDelete,
            onPostEdit
        } = this.props;

        return (
            <li id={`post-${id}`}>
            {this.state.modeEdit?
                <div>
                    <h2>Редактирование поста</h2>
                    <form>
                      <div className="form-group">
                        <input className="form-control" type="text" name="title" placeholder="Название поста" onChange={this.handleTitleChange} value={this.state.title} />
                        {this.state.showErrors && !this.state.title.length &&
                            <label htmlFor="title">Поле заголовок обязательное</label>
                        }
                      </div>
                      <div className="form-group">
                          <textarea className="form-control" name="text" id="" cols="30" rows="10" placeholder="Ваш текст здесь..." onChange={this.handleTextChange} value={this.state.text}></textarea>
                      </div>
                      <div className="form-group">
                         <div id={`taggle-${id}`} className="input textarea clearfix custom stackoverflow" ref={c => this.tagsContainer = c} />
                      </div>
                    </form>
                    <button type="submit" className="btn btn-default pull-right" onClick={this.changeMode}>Отмена</button>
                    <button type="submit" className="btn btn-default" onClick={this.handlePostAdd}>Сохранить</button>
                </div>
            :
                <div>
                    <div className="post__header">
                        <span className="post__delete-icon pull-right" onClick={this.handleDelete}> × </span>
                    <a href="#" className="pull-right btn btn-link post__edit-btn" onClick={this.changeMode}>Редактировать</a>
                        <h3>{title}</h3>
                    </div>
                    <div className="post__content">
                        <div className={text.length>350 && !this.state.isOpen && 'post__content_overflow'}>
                            <p ref={c => this.posttext = c}>{text}</p>
                        </div>
                        {text.length>350 &&
                        <a href="#" className="post__open-btn pull-right btn btn-default" onClick={this.changeOpen}>{this.state.isOpen?'Скрыть':'Смотреть полностью'}</a>
                        }
                    </div>
                    {tags && !tags.length ||
                    <div className="post__footer">
                        <Tags tags={tags} />
                    </div>
                    }
                </div>
            }
            </li>
        )
    }
})

const PopularTags = React.createClass({
    getInitialState() {
        return {
            currentTag: ''
        };
    },
    onTagSearch(tagId) {
        this.props.onTagSearch(tagId);
        this.setState({ currentTag: tagId });
    },
    resetCurrentTag(event){
        event.preventDefault();
        this.setState({ currentTag: '' });
        this.props.onTagSearch('');
    },
    render(){
        const {
            tags,
            onTagSearch
        } = this.props;
        const tagsArr = Object.keys(tags);
        return (
                <div>
                    {!tagsArr.length ||
                        <div>
                            <span>Теги:&nbsp;</span>
                            <ul className="popularTags list-unstyled list-inline">
                                {
                                    tagsArr.map(tag =>
                                        <Tag
                                            key={tag}
                                            title={tag}
                                            count={tags[tag]}
                                            onTagSearch={this.onTagSearch}
                                            isCurrent={this.state.currentTag==tag}
                                        />
                                    )
                                }
                                {this.state.currentTag &&
                                    <li><a href="#" onClick={this.resetCurrentTag}>Показать все</a></li>
                                }
                            </ul>
                        </div>
                    }
                </div>
        )
    }
})

const PostList = React.createClass({
    handleDelete() {
        this.props.onPostListDelete();
    },
    onPostEdit(post) {
        this.props.onPostEdit(post);
    },
    onTagSearch(tagId) {
        this.props.onTagSearch(tagId);
    },
    render(){
        const {
            posts,
            tags,
            onPostDelete,
            onPostEdit,
            onPostListDelete,
            onTagSearch
        } = this.props;

        return (
            <div>
                {
                    (
                        !posts.length ||
                        (
                            <span className="postlist__delete-icon btn btn-default pull-right" onClick={this.handleDelete}>Удалить все посты</span>
                        )
                    )
                }
                <h2>Посты {!posts.length || <small>всего постов: {posts.length}</small>}</h2>
                <PopularTags tags={tags} onTagSearch={this.onTagSearch} />
                {
                    posts.length &&
                    <ul className="postlist list-unstyled">
                        {
                            posts.map(post =>
                                <Post
                                    key={post.id}
                                    id={post.id}
                                    title={post.title}
                                    text={post.text}
                                    tags={post.tags}
                                    onDelete={onPostDelete}
                                    onPostEdit={onPostEdit}
                                />
                            )
                        }
                    </ul>
                    ||
                       <p>В этом блоге нет постов</p>
                  }
            </div>
        )
    }
})
const LiveSearch =  React.createClass({
    getInitialState(){
        return {
            value: ''
        }
    },
    handleChange(e) {
        this.setState({
            value: e.target.value
        });
        this.props.onSearch(e.target.value)
    },
    render() {
        return (
            <div className="container-search">
                <div className="form-group">
                    <input className="form-control" type="search" onChange={this.handleChange} value={this.state.value} placeholder="Search by titles..." />
                </div>
            </div>
        );
    }
});
const BlogApp = React.createClass({
    getInitialState() {
        return {
            posts: [], //[{key: Math.random(), title:'заголовок поста remarkable', text:'##### Remarkable rulezz!'}],
            posts4show: [],
            tags: {}
        };
    },
    componentDidMount() {
        try {
            const savedPostes = JSON.parse(localStorage.getItem('posts'));
            if (savedPostes) {
                this.setState({
                    posts: savedPostes,
                    posts4show: savedPostes
                });
            }

            const savedTags = JSON.parse(localStorage.getItem('tags'));
            if (savedTags) {
                this.setState({ tags: savedTags });
            }
        } catch(ex) {
            console.log(ex)
        }

    },
    componentDidUpdate() {
        const posts = JSON.stringify(this.state.posts);
        localStorage.setItem('posts', posts);
        const tags = JSON.stringify(this.state.tags);
        localStorage.setItem('tags', tags);
    },
    agregateTags() {
        const resObj={};//this.state.tags

        this.state.posts.forEach(function(post) {
            if (post.tags.length)
                post.tags.reduce(function(prev, cur, i, arr) {
                    let res = prev;
                    const val = 1;

                    if (cur in res) {
                        res[cur] = res[cur]+val;
                    }
                    else {
                        var newObj = {};
                        newObj[cur]=val;
                        res = Object.assign(res, newObj);
                    }
                    return res;
                }, resObj);
        })

        this.setState({
            tags: resObj
        })
    },
    handlePostEdit(postEdit) {
        const oldPostId = this.state.posts.findIndex(post=>post.id==postEdit.id);
        if (oldPostId !==-1)
        {
            this.state.posts[oldPostId] = postEdit;
            this.setState({
                posts: this.state.posts,
                posts4show: this.state.posts
            }, this.agregateTags);
        }
    },
    handlePostAdd(newPost) {
        this.setState({
            posts: [newPost, ...this.state.posts],
            posts4show: [newPost, ...this.state.posts]
        }, this.agregateTags);
    },
    handlePostDelete(postId) {
        this.setState({
            posts4show: this.state.posts.filter(post => post.id !== postId),
        }, this.agregateTags);
    },
    handlePostListDelete() {
        this.setState({
            posts: [],
            posts4show: [],
            tags: {}
        });
    },
    handleSearch(str){
        const savedPostes = JSON.parse(localStorage.getItem('posts'));
        if (savedPostes) {
            let posts4show  = savedPostes;
            if (str.length)
                posts4show = savedPostes.filter(post=>post.title.toUpperCase().indexOf(str.toUpperCase())!=-1)
            this.setState({
                posts4show: posts4show
            })
        }
    },
    handleTagSearch(tagId) {
        const savedPostes = JSON.parse(localStorage.getItem('posts'));
        if (savedPostes) {
            let posts4show  = savedPostes;
            if (tagId)
                posts4show = savedPostes.filter(post=>post.tags.indexOf(tagId)!=-1)
            this.setState({
                posts4show: posts4show
            })
        }
    },
    render(){
        return (
            <div className="container">
                <a href="#" role="button" className="btn btn-primary pull-right openPostEditorBtn" data-toggle="collapse" href="#postEditor">Написать пост</a>
                <h1>Блог</h1>
                <PostEditor onPostAdd={this.handlePostAdd}  />
                <hr className="mainhr"/>
                <LiveSearch onSearch={this.handleSearch}  />
                <PostList
                    posts={this.state.posts4show}
                    tags={this.state.tags}
                    onPostDelete={this.handlePostDelete}
                    onPostEdit={this.handlePostEdit}
                    onPostListDelete={this.handlePostListDelete}
                    onTagSearch={this.handleTagSearch}
                 />
            </div>
        )
    }
})
ReactDOM.render(
    <BlogApp />,
    document.getElementById('root')
);
