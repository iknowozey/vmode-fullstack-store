import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from '@/components/ui/Chart'
import { IMonthlySales } from '@/shared/types/statistics.interface'
import { formatPrice } from '@/lib/string/format-price'

const chartConfig = {
	value: {
		label: 'Прибыль',
		color: '#3B82F6'
	}
} satisfies ChartConfig

interface OverviewProps {
	data: IMonthlySales[]
}

export function Overview({ data }: OverviewProps) {
	return (
		<Card>
			<CardHeader className='flex flex-col items-stretch space-y-0 border-b p-4'>
				<CardTitle>Прибыль</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer
					className='aspect-auto h-[310px] w-full'
					config={chartConfig}
				>
					<AreaChart
						accessibilityLayer
						data={data}
						margin={{
							left: 12,
							right: 12
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='date'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									labelFormatter={formatPrice}
									indicator='line'
								/>
							}
						/>
						<Area
							dataKey='value'
							type='natural'
							fill='var(--color-foreground)'
							stroke='var(--color-foreground)'
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
