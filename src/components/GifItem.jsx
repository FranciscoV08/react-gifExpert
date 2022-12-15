
export const GifItem = ({title, url, id}) => {

  return (
    <div className="cardcard-grid">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
    // <li key={id}>{title}</li>

  )
}
