<script setup lang="ts">
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarFooter, SidebarRail, SidebarInset } from '~/components/ui/sidebar';
import { BookOpen, Bot, Settings2, SquareTerminal, ChevronRight, Frame, PieChart, MoreHorizontal, Folder, Forward, Trash2, ChevronsUpDown, Sparkles, BadgeCheck, CreditCard, Bell, LogOut } from 'lucide-vue-next'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '~/components/ui/collapsible';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '~/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from '~/components/ui/breadcrumb';
import { Card, CardContent, CardTitle, CardDescription, CardHeader } from '~/components/ui/card';
import { DonutChart } from '~/components/ui/chart-donut';
import { AreaChart } from '~/components/ui/chart-area';
import { LineChart } from '~/components/ui/chart-line';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';

const nav = [
    {
        title: "Playground",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
            {
                title: "History",
                url: "#",
            },
            {
                title: "Starred",
                url: "#",
            },
            {
                title: "Settings",
                url: "#",
            },
        ],
    },
    {
        title: "Models",
        url: "#",
        icon: Bot,
        items: [
            {
                title: "Genesis",
                url: "#",
            },
            {
                title: "Explorer",
                url: "#",
            },
            {
                title: "Quantum",
                url: "#",
            },
        ],
    },
    {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        items: [
            {
                title: "Introduction",
                url: "#",
            },
            {
                title: "Get Started",
                url: "#",
            },
            {
                title: "Tutorials",
                url: "#",
            },
            {
                title: "Changelog",
                url: "#",
            },
        ],
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
            {
                title: "General",
                url: "#",
            },
            {
                title: "Team",
                url: "#",
            },
            {
                title: "Billing",
                url: "#",
            },
            {
                title: "Limits",
                url: "#",
            },
        ],
    },
]

const projects = [
    {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
    },
    {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
    },
    {
        name: "Travel",
        url: "#",
        icon: Map,
    },
]

const donutData = [
    { name: 'Jan', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Feb', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Mar', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Apr', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'May', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Jun', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
]

const attendanceData = [
    { name: 'Jan', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Feb', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Mar', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Apr', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'May', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Jun', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Jul', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
]

const communicationData = [
    {
        'year': 1970,
        'Export Growth Rate': 2.04,
        'Import Growth Rate': 1.53,
    },
    {
        'year': 1971,
        'Export Growth Rate': 1.96,
        'Import Growth Rate': 1.58,
    },
    {
        'year': 1972,
        'Export Growth Rate': 1.96,
        'Import Growth Rate': 1.61,
    },
    {
        'year': 1973,
        'Export Growth Rate': 1.93,
        'Import Growth Rate': 1.61,
    },
    {
        'year': 1974,
        'Export Growth Rate': 1.88,
        'Import Growth Rate': 1.67,
    },
    {
        'year': 1975,
        'Export Growth Rate': 1.79,
        'Import Growth Rate': 1.64,
    },
    {
        'year': 1976,
        'Export Growth Rate': 1.77,
        'Import Growth Rate': 1.62,
    },
    {
        'year': 1977,
        'Export Growth Rate': 1.74,
        'Import Growth Rate': 1.69,
    },
    {
        'year': 1978,
        'Export Growth Rate': 1.74,
        'Import Growth Rate': 1.7,
    },
    {
        'year': 1979,
        'Export Growth Rate': 1.77,
        'Import Growth Rate': 1.67,
    },
    {
        'year': 1980,
        'Export Growth Rate': 1.79,
        'Import Growth Rate': 1.7,
    },
    {
        'year': 1981,
        'Export Growth Rate': 1.81,
        'Import Growth Rate': 1.72,
    },
    {
        'year': 1982,
        'Export Growth Rate': 1.84,
        'Import Growth Rate': 1.73,
    },
    {
        'year': 1983,
        'Export Growth Rate': 1.77,
        'Import Growth Rate': 1.73,
    },
    {
        'year': 1984,
        'Export Growth Rate': 1.78,
        'Import Growth Rate': 1.78,
    },
    {
        'year': 1985,
        'Export Growth Rate': 1.78,
        'Import Growth Rate': 1.81,
    },
    {
        'year': 1986,
        'Export Growth Rate': 1.82,
        'Import Growth Rate': 1.89,
    },
    {
        'year': 1987,
        'Export Growth Rate': 1.82,
        'Import Growth Rate': 1.91,
    },
    {
        'year': 1988,
        'Export Growth Rate': 1.77,
        'Import Growth Rate': 1.94,
    },
    {
        'year': 1989,
        'Export Growth Rate': 1.76,
        'Import Growth Rate': 1.94,
    },
    {
        'year': 1990,
        'Export Growth Rate': 1.75,
        'Import Growth Rate': 1.97,
    },
    {
        'year': 1991,
        'Export Growth Rate': 1.62,
        'Import Growth Rate': 1.99,
    },
    {
        'year': 1992,
        'Export Growth Rate': 1.56,
        'Import Growth Rate': 2.12,
    },
    {
        'year': 1993,
        'Export Growth Rate': 1.5,
        'Import Growth Rate': 2.13,
    },
    {
        'year': 1994,
        'Export Growth Rate': 1.46,
        'Import Growth Rate': 2.15,
    },
    {
        'year': 1995,
        'Export Growth Rate': 1.43,
        'Import Growth Rate': 2.17,
    },
    {
        'year': 1996,
        'Export Growth Rate': 1.4,
        'Import Growth Rate': 2.2,
    },
    {
        'year': 1997,
        'Export Growth Rate': 1.37,
        'Import Growth Rate': 2.15,
    },
    {
        'year': 1998,
        'Export Growth Rate': 1.34,
        'Import Growth Rate': 2.07,
    },
    {
        'year': 1999,
        'Export Growth Rate': 1.32,
        'Import Growth Rate': 2.05,
    },
    {
        'year': 2000,
        'Export Growth Rate': 1.33,
        'Import Growth Rate': 2.07,
    },
    {
        'year': 2001,
        'Export Growth Rate': 1.31,
        'Import Growth Rate': 2.08,
    },
    {
        'year': 2002,
        'Export Growth Rate': 1.29,
        'Import Growth Rate': 2.1,
    },
    {
        'year': 2003,
        'Export Growth Rate': 1.27,
        'Import Growth Rate': 2.15,
    },
    {
        'year': 2004,
        'Export Growth Rate': 1.27,
        'Import Growth Rate': 2.21,
    },
    {
        'year': 2005,
        'Export Growth Rate': 1.26,
        'Import Growth Rate': 2.23,
    },
    {
        'year': 2006,
        'Export Growth Rate': 1.26,
        'Import Growth Rate': 2.29,
    },
    {
        'year': 2007,
        'Export Growth Rate': 1.27,
        'Import Growth Rate': 2.34,
    },
    {
        'year': 2008,
        'Export Growth Rate': 1.26,
        'Import Growth Rate': 2.36,
    },
    {
        'year': 2009,
        'Export Growth Rate': 1.26,
        'Import Growth Rate': 2.36,
    },
    {
        'year': 2010,
        'Export Growth Rate': 1.25,
        'Import Growth Rate': 2.35,
    },
    {
        'year': 2011,
        'Export Growth Rate': 1.24,
        'Import Growth Rate': 2.34,
    },
    {
        'year': 2012,
        'Export Growth Rate': 1.25,
        'Import Growth Rate': 2.39,
    },
    {
        'year': 2013,
        'Export Growth Rate': 1.22,
        'Import Growth Rate': 2.3,
    },
    {
        'year': 2014,
        'Export Growth Rate': 1.2,
        'Import Growth Rate': 2.35,
    },
    {
        'year': 2015,
        'Export Growth Rate': 1.17,
        'Import Growth Rate': 2.39,
    },
    {
        'year': 2016,
        'Export Growth Rate': 1.16,
        'Import Growth Rate': 2.41,
    },
    {
        'year': 2017,
        'Export Growth Rate': 1.13,
        'Import Growth Rate': 2.44,
    },
    {
        'year': 2018,
        'Export Growth Rate': 1.07,
        'Import Growth Rate': 2.45,
    },
    {
        'year': 2019,
        'Export Growth Rate': 1.03,
        'Import Growth Rate': 2.47,
    },
    {
        'year': 2020,
        'Export Growth Rate': 0.92,
        'Import Growth Rate': 2.48,
    },
    {
        'year': 2021,
        'Export Growth Rate': 0.82,
        'Import Growth Rate': 2.51,
    },
]
</script>

<template>
    <SidebarProvider>
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg"
                            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                            <div
                                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                <!-- icon -->
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">
                                    SHACK15
                                </span>
                                <span className="truncate text-xs">
                                    social | culture | network
                                </span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Insight</SidebarGroupLabel>
                    <SidebarMenu>
                        <Collapsible v-for="item in nav" :key="item.title" :as-child="true"
                            :default-open="item.isActive" class="group/collapsible">
                            <SidebarMenu>
                                <CollapsibleTrigger :as-child="true">
                                    <SidebarMenuButton :tooltip="item.title">
                                        <component :is="item.icon" v-if="item.icon" />
                                        <span>{{ item.title }}</span>
                                        <ChevronRight
                                            class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        <SidebarMenuSubItem v-for="sub in item.items" :key="sub.title">
                                            <SidebarMenuSubButton :as-child="true">
                                                <a :href="sub.url">
                                                    <span>{{ sub.title }}</span>
                                                </a>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenu>
                        </Collapsible>
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup class="group-data-[collapsible=icon]:hidden">
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="item in projects" :key="item.name">
                            <SidebarMenuButton :as-child="true">
                                <a :href="item.url">
                                    <item.icon />
                                    <span>{{ item.name }}</span>
                                </a>
                            </SidebarMenuButton>
                            <DropdownMenu>
                                <DropdownMenuTrigger :as-child="true">
                                    <SidebarMenuAction :show-on-hover="true">
                                        <MoreHorizontal />
                                        <span class="sr-only">More</span>
                                    </SidebarMenuAction>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent class="w-48 rounded-lg" side="bottom" align="end">
                                    <DropdownMenuItem>
                                        <Folder class="text-muted-foreground" />
                                        <span>View Project</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Forward class="text-muted-foreground" />
                                        <span>Share Project</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Trash2 class="text-muted-foreground" />
                                        <span>Delete Project</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton class="text-sidebar-foreground/70">
                                <MoreHorizontal class="text-sidebar-foreground/70" />
                                <span>More</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger :as-child="true">
                                <SidebarMenuButton size="lg"
                                    class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                                    <Avatar class="h-8 w-8 rounded-lg">
                                        <AvatarImage src="" alt="avatar" />
                                        <AvatarFallback class="rounded-lg">NC</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold">
                                            Natasha
                                        </span>
                                        <span className="truncate text-xs">
                                            natasha@shack15.com
                                        </span>
                                    </div>
                                    <ChevronsUpDown class="ml-auto size-4" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                side="bottom" align="end" :side-offset=4>
                                <DropdownMenuLabel class="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <Avatar class="h-8 w-8 rounded-lg">
                                            <AvatarImage src="" alt="avatar" />
                                            <AvatarFallback class="rounded-lg">
                                                CN
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold">
                                                Natasha
                                            </span>
                                            <span className="truncate text-xs">
                                                natasha@shack15.com
                                            </span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Sparkles />
                                        Upgrade to Pro
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <BadgeCheck />
                                        Account
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard />
                                        Billing
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Bell />
                                        Notifications
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
        <main>
            <SidebarInset>
                <header
                    className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger class="-ml-1" />
                        <Separator orientation="vertical" class="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem class="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        Building Your Application
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator class="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div class="aspect-video rounded-xl bg-muted/50">
                            <Card class="flex flex-col">
                                <CardHeader class="items-center pb-0">
                                    <CardTitle>Radial Chart - Shape</CardTitle>
                                    <CardDescription>January - June 2024</CardDescription>
                                </CardHeader>
                                <CardContent class="flex-1 pb-0">
                                    <DonutChart index="name" :category="'total'" :data="donutData" />
                                </CardContent>
                                <CardFooter className="flex-col gap-2 text-sm">
                                    <div className="flex items-center gap-2 font-medium leading-none">
                                        Trending up by 5.2% this month
                                        <TrendingUp className="h-4 w-4" />
                                    </div>
                                    <div className="leading-none text-muted-foreground">
                                        Showing total visitors for the last 6 months
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                        <div class="aspect-video rounded-xl bg-muted/50">
                            <Card class="flex flex-col">
                                <CardHeader class="items-center pb-0">
                                    <CardTitle>Radial Chart - Shape</CardTitle>
                                    <CardDescription>January - June 2024</CardDescription>
                                </CardHeader>
                                <CardContent class="flex-1 pb-0">
                                    <AreaChart :data="attendanceData" index="name"
                                        :categories="['total', 'predicted']" />
                                </CardContent>
                                <CardFooter className="flex-col gap-2 text-sm">
                                    <div className="flex items-center gap-2 font-medium leading-none">
                                        Trending up by 5.2% this month
                                        <TrendingUp className="h-4 w-4" />
                                    </div>
                                    <div className="leading-none text-muted-foreground">
                                        Showing total visitors for the last 6 months
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                        <div class="aspect-video rounded-xl bg-muted/50">
                            <Card class="flex flex-col">
                                <CardHeader class="items-center pb-0">
                                    <CardTitle>Radial Chart - Shape</CardTitle>
                                    <CardDescription>January - June 2024</CardDescription>
                                </CardHeader>
                                <CardContent class="flex-1 pb-0">
                                    <LineChart :data="communicationData" index="year"
                                        :categories="['Export Growth Rate', 'Import Growth Rate']" :y-formatter="(tick, i) => {
                                            return typeof tick === 'number'
                                                ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
                                                : ''
                                        }" />
                                </CardContent>
                                <CardFooter className="flex-col gap-2 text-sm">
                                    <div className="flex items-center gap-2 font-medium leading-none">
                                        Trending up by 5.2% this month
                                        <TrendingUp className="h-4 w-4" />
                                    </div>
                                    <div className="leading-none text-muted-foreground">
                                        Showing total visitors for the last 6 months
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                    <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                        <Table>
                            <TableCaption>A list of your recent invoices.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead class="w-[100px]">
                                        Invoice
                                    </TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead class="text-right">
                                        Amount
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell class="font-medium">
                                        INV001
                                    </TableCell>
                                    <TableCell>Paid</TableCell>
                                    <TableCell>Credit Card</TableCell>
                                    <TableCell class="text-right">
                                        $250.00
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </SidebarInset>

        </main>
    </SidebarProvider>
</template>