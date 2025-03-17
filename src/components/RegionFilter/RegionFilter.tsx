import DropDown from '../DropDown'

interface RegionFilterProps {
  setRegion: (region: string) => void
  regions: string[]
  region: string
}

const RegionFilter = ({ setRegion, regions, region }: RegionFilterProps) => {
  return (
    <DropDown
      id='region-filter'
      label='Filter by Region'
      options={regions}
      value={region}
      onChange={setRegion}
    />
  )
}

export default RegionFilter
