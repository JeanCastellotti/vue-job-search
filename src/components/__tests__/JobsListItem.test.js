import { render, screen } from '@testing-library/vue'
import JobsListItem from '@/components/JobsListItem.vue'
import { RouterLinkStub } from '@vue/test-utils'

describe('JobsListItem', () => {
  const props = {
    id: 1,
    title: 'Vue Developer',
    organization: 'ACME',
    locations: ['Paris', 'Bordeaux'],
    degree: 'Master',
    minimumQualifications: ['foo', 'bar', 'baz'],
    preferredQualifications: ['foo', 'bar', 'baz'],
    description: ['foo', 'bar', 'baz'],
    jobType: 'Stage'
  }

  const renderJobsListItem = (props) => {
    render(JobsListItem, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      },
      props
    })
  }

  it('should render title', () => {
    renderJobsListItem(props)
    const title = screen.getByText('Vue Developer')
    expect(title).toBeInTheDocument()
  })

  it('should render organization', () => {
    renderJobsListItem(props)
    const organization = screen.getByText('ACME')
    expect(organization).toBeInTheDocument()
  })

  it('should render degree', () => {
    renderJobsListItem(props)
    const degree = screen.getByText('Master')
    expect(degree).toBeInTheDocument()
  })

  it('should render job type', () => {
    renderJobsListItem(props)
    const jobType = screen.getByText('Stage')
    expect(jobType).toBeInTheDocument()
  })

  it('should render locations', () => {
    renderJobsListItem(props)
    const locations = screen.getByText('Paris, Bordeaux')
    expect(locations).toBeInTheDocument()
  })

  // ...
})
