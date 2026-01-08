const Menu = (props: { w: string | number | undefined; h: string | number | undefined }) => {
  return (
    <svg width={props.w} height={props.h} viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width={props.w} height={props.h} fill="url(#pattern0)"/>
        <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_84_32" transform="scale(0.01)"/>
            </pattern>
            <image id="image0_84_32" width={props.w} height={props.h} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACu0lEQVR4nO3aO49NURjG8cUnUBBxb9yiplIQoRMikmlkUOAr+ECIVlBp3DXjEuUUMnPW86ztUMz0blt2qEbORsJZ79nz/yVvv9da58w+e88/JQAAAAAAAAAAJrK9y/ZpSVclXR/C5Jyv/FzTzpk4+rZtN9q+bHtB0jfb7RBHP9a2YPtSt+YUUSnloO23tTfL0z+cN7b3p0gkHbe9WntzXG9Wc87HUgS2D9heCbApbeVZqf5N6f5+SnodYDPaCCPpVdV7iqT531zgV0mLkl4OZBa7NfWtOed8oeaBvOi5uBuj0Wh7Gpic8w7bN3s+hM+qXNjy8vK2nk/LrTRwkm5P+qswHo+3Tv2CSimnJlzQt1LK7jRwTdPs6XnWOjn1C+oeiiYcyHJaJySNJuzBxTA3dEk5rRO2NWEP5mtczMmeXxp708BJ2tdzYz8x9QtqmmaLpC8TLuhO2Hc8/+756+6EtX8upWxONdh+3PMpude930oD0zTNIdv3e37uP6x2cZLO/8HT6wfb74Ywkj7+br0553PVDqRt2w2Snv/tK4ahjqSnKcjv8XHtzXD9wxiHef7KOR9Z54fyfjQaHU6RdJ8OSU8CbE475XnU/bs6RVVKOSvpge1PATar/U/z6ecaz6RZsbS0tKmUctT2nKRrQxjbc92aurXV3l8AGDJCuQAI5QIhlAuEUM6Eco43hHIONoRyIpRbe+8glPMv3xJCuRoI5YIhlAuIUC4YQrlACOUCIZQLhFDO9QM5QjnP7KsTQjnHOQxCOccZQjnHGUI51z8EQjkRygHAukEoFwChXCCEcoEQyplQzvGGUM7BhlBOhHJr7x2Ecv7lW0IoVwOhXDCEcgERygVDKBcIoVwghHKBEMq5fiBHKOeZfXVCKOc4h0Eo5zhDKOc4Qyjn+odAKCdCOQAAAAAAAABAmhXfAUKaKo1TPIkbAAAAAElFTkSuQmCC"/>
        </defs>
    </svg>
  )
}

export default Menu