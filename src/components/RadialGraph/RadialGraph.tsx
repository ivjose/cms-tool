import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'
import { memo } from 'react'

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false })

type IProps = {
  series?: number[]
  height?: number
  colors?: string[]
}

const RadialGraph: React.FC<IProps> = ({
  series = [24, 14],
  height = 390,
  colors = ['#227622', '#4c4c4c'],
}) => {
  const options: ApexOptions = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,

        hollow: {
          margin: 5,
          size: '40%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: [...colors],

    legend: {
      show: true,
      floating: false,
      fontSize: '14px',
      fontWeight: 600,
      position: 'bottom',
      horizontalAlign: 'center',
      offsetY: -120,

      labels: {
        colors: undefined,
        useSeriesColors: true,
      },
      itemMargin: {
        vertical: 3.5,
      },
      formatter: function (seriesName, opts) {
        return opts.w.globals.series[opts.seriesIndex] + '%'
      },
      onItemClick: {
        toggleDataSeries: false,
      },
      markers: {
        width: 0,
        height: 0,
      },
    },
  }

  return (
    <>
      <ApexCharts
        options={options}
        series={series}
        type="radialBar"
        height={height}
      />
    </>
  )
}

export default memo(RadialGraph)
