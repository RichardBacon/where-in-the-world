import { useState } from 'react'
import DropDown from './DropDown'

interface RegionFilterProps {
  setRegion: (region: string) => void
  regions: string[]
}

const RegionFilter = ({ setRegion, regions }: RegionFilterProps) => {
  const [selectedRegion, setSelectedRegion] = useState('All')

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region)
    setRegion(region)
  }

  return (
    <DropDown
      options={regions}
      value={selectedRegion}
      onChange={handleRegionChange}
    />
  )
}

export default RegionFilter
