import {JSX} from 'react'
import { SearchIcon } from './icons/SearchIcon'
import { Button } from './ui/Button'

interface Props {
  className?: string
  onSearch: (search: string) => void
}

export const SearchBar = ({ className = '', onSearch }: Props): JSX.Element => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const {search = ''} = Object.fromEntries(new FormData(e.currentTarget))
    onSearch(search as string)
  }
  return (
    <form className={`w-full ${className}`} onSubmit={handleSubmit}>   
        <div className="relative flex">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon className='text-primary-text' />
            </div>
            <input 
              type="search" 
              id="default-search"
              name='search'
              className="block w-full py-3 px-4 ps-10 text-sm text-primary-text border border-boder-color rounded-lg bg-secondary-background rounded-r-none" placeholder="Escribe el nombre del usuario" 
              required />
            <Button className='rounded-l-none' btnStyle='primary' type='submit' >
              Buscar
            </Button>
        </div>
    </form>
  )
}
