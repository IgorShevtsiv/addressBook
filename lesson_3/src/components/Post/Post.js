export default function Post(props) {
    let {id, title, searchPost} = props;
    return (
        <div>
            {id} -
            {title} -
            <button onClick={() => searchPost(id)}>details</button>
        </div>
    )

}