<script setup lang="ts">
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarFooter, SidebarRail, SidebarInset } from '~/components/ui/sidebar';
import { BookOpen, Bot, Settings2, SquareTerminal, ChevronRight, Frame, PieChart, MoreHorizontal, Folder, Forward, Trash2, ChevronsUpDown, Sparkles, BadgeCheck, CreditCard, Bell, LogOut, TrendingUp } from 'lucide-vue-next'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '~/components/ui/collapsible';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '~/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from '~/components/ui/breadcrumb';
import { Card, CardContent, CardTitle, CardDescription, CardHeader } from '~/components/ui/card';
import { DonutChart } from '~/components/ui/chart-donut';
import { AreaChart } from '~/components/ui/chart-area';
import { LineChart } from '~/components/ui/chart-line';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';

const url = process.env.API_URL ?? ''

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

const { data } = await useAsyncData('cart-discount', async () => {
    const [activities, events, engagements, members] = await Promise.all([
        $fetch<Array<{ id: string; year: number; events_attended: number }>>('/activities', { baseURL: url, cache: 'no-store' }),
        $fetch<Array<{ id: string; name: string; event_date: string; attendance_count: number }>>('/events', { baseURL: url, cache: 'no-store' }),
        $fetch<Array<{ id: string; messages_sent: number; messages_received: number; }>>("/engagements", { baseURL: url, cache: 'no-store' }),
        $fetch<Array<{ id: string; name: string; email: string; joined_date: string; last_active_date: string; status: 'active' | 'inactive' }>>("/members", { baseURL: url, cache: 'no-store' })
    ])

    return { activities, events, engagements, members }
})

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
                            <Card v-if="data" class="flex flex-col">
                                <CardHeader class="items-center pb-0">
                                    <CardTitle>Activities</CardTitle>
                                    <CardDescription>Events attended</CardDescription>
                                </CardHeader>
                                <CardContent class="flex-1 pb-0 ">
                                    <DonutChart index="id" :category="'events_attended'" :data="data.activities"
                                        class=" h-32 m-4" />
                                </CardContent>
                                <CardFooter class="flex-col gap-2 text-sm">
                                    <div class="flex items-center gap-2 font-medium leading-none">
                                        Trending up by 5.2% this month
                                        <TrendingUp class="h-4 w-4" />
                                    </div>
                                    <div class="leading-none text-muted-foreground">
                                        Showing total visitors for the last 6 months
                                    </div>
                                </CardFooter>
                            </Card>
                            <Skeleton v-else class="aspect-video rounded-xl bg-muted/50" />
                        </div>
                        <div class="aspect-video rounded-xl bg-muted/50">
                            <Card v-if="data" class="flex flex-col">
                                <CardHeader class="items-center pb-0">
                                    <CardTitle>Engagements</CardTitle>
                                    <CardDescription>Interactions on the platform</CardDescription>
                                </CardHeader>
                                <CardContent class="flex-1 pb-0">
                                    <AreaChart class=" h-32 m-4" :data="data.engagements" index="id"
                                        :categories="['messages_received', 'messages_sent']" :show-grid-line=false />
                                </CardContent>
                                <CardFooter class="flex-col gap-2 text-sm">
                                    <div class="flex items-center gap-2 font-medium leading-none">
                                        Trending up by 5.2% this month
                                        <TrendingUp class="h-4 w-4" />
                                    </div>
                                    <div class="leading-none text-muted-foreground">
                                        Showing total visitors for the last 6 months
                                    </div>
                                </CardFooter>
                            </Card>
                            <Skeleton v-else class="aspect-video rounded-xl bg-muted/50" />
                        </div>
                        <div class="aspect-video rounded-xl bg-muted/50">
                            <Card v-if="data" class="flex flex-col">
                                <CardHeader class="items-center pb-0">
                                    <CardTitle>Events</CardTitle>
                                    <CardDescription>All year events</CardDescription>
                                </CardHeader>
                                <CardContent class="flex-1 pb-0">
                                    <LineChart class=" h-32 m-4" :data="data.events" index="id" :colors="['green']"
                                        :show-grid-line=false :categories="['attendance_count']" :y-formatter="(tick, i) => {
                                            return typeof tick === 'number'
                                                ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
                                                : ''
                                        }" :show-legend="false" :show-x-axis="false" :show-y-axis="false" />
                                </CardContent>
                                <CardFooter class="flex-col gap-2 text-sm">
                                    <div className="flex items-center gap-2 font-medium leading-none">
                                        Trending up by 5.2% this month
                                        <TrendingUp class="h-4 w-4" />
                                    </div>
                                    <div class="leading-none text-muted-foreground">
                                        Showing total visitors for the last 6 months
                                    </div>
                                </CardFooter>
                            </Card>
                            <Skeleton v-else class="aspect-video rounded-xl bg-muted/50" />
                        </div>
                    </div>
                    <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                        <Table>
                            <TableCaption>A list of recent members.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead class="w-[100px]">
                                        Status
                                    </TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>
                                        Joined
                                    </TableHead>
                                    <TableHead class="text-right">
                                        Last Active
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody v-if="data">
                                <TableRow v-for="member in data.members" :key="member.id">
                                    <TableCell class="font-medium">
                                        {{ member.status }}
                                    </TableCell>
                                    <TableCell>{{ member.name }}</TableCell>
                                    <TableCell>{{ member.email }}</TableCell>
                                    <TableCell>{{ formatDate(member.joined_date) }}</TableCell>
                                    <TableCell class="text-right">
                                        {{ formatDate(member.last_active_date) }}
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